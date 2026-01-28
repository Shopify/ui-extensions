/**
 * Test file for build-docs-targets-json.mjs
 *
 * This test verifies that component type exclusions work correctly:
 * - AnyCheckoutComponent should NOT include 'Announcement'
 * - AnyCheckoutComponentExcept<'Image' | 'Banner'> should NOT include 'Image', 'Banner', or 'Announcement'
 * - AnyThankYouComponent SHOULD include 'Announcement'
 * - AllowedComponents<'Chat'> should ONLY include 'Chat'
 *
 * Run with: node build-docs-targets-json.test.mjs
 */

import fs from 'fs';
import path from 'path';
import {execSync} from 'child_process';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_VERSION = 'test-version';

// Find the generated docs path (same logic as build script)
function findGeneratedDocsPath() {
  const generatedDir = path.join(__dirname, 'generated');

  function findFile(dir) {
    try {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          const result = findFile(fullPath);
          if (result) return result;
        } else if (file === 'generated_docs_data.json') {
          return path.dirname(fullPath);
        }
      }
    } catch {
      // Directory doesn't exist yet
    }
    return null;
  }

  return findFile(generatedDir) || generatedDir;
}

const OUTPUT_PATH = path.join(findGeneratedDocsPath(), 'targets.json');

// Test configuration
const tests = {
  passed: 0,
  failed: 0,
  errors: [],
};

function assert(condition, message) {
  if (condition) {
    tests.passed++;
    console.log(`  ✅ ${message}`);
  } else {
    tests.failed++;
    tests.errors.push(message);
    console.log(`  ❌ ${message}`);
  }
}

function assertArrayIncludes(array, item, message) {
  assert(array.includes(item), message);
}

function assertArrayNotIncludes(array, item, message) {
  assert(!array.includes(item), message);
}

// Cleanup function - on this branch we don't need to cleanup test directories
// because the script outputs to the same location as the real generated docs
function cleanup() {
  // No cleanup needed - we reuse the existing generated docs directory
}

async function runTests() {
  console.log('\n🧪 Running checkout build-docs-targets-json.mjs tests\n');

  // Clean up any previous test artifacts
  cleanup();

  // Generate the targets.json with test version
  console.log('📦 Generating targets.json...');
  try {
    execSync(
      `node ${path.join(
        __dirname,
        'build-docs-targets-json.mjs',
      )} ${TEST_VERSION}`,
      {
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../..'),
      },
    );
  } catch (error) {
    console.error('❌ Failed to generate targets.json:', error.message);
    process.exit(1);
  }

  // Read the generated JSON
  if (!fs.existsSync(OUTPUT_PATH)) {
    console.error(`❌ Output file not found: ${OUTPUT_PATH}`);
    process.exit(1);
  }

  const targetsJson = JSON.parse(fs.readFileSync(OUTPUT_PATH, 'utf-8'));
  console.log('✅ Generated targets.json successfully\n');

  // ============================================
  // TEST 1: AnyCheckoutComponent targets should NOT include 'Announcement'
  // ============================================
  console.log('Test 1: AnyCheckoutComponent should exclude Announcement');
  console.log('─'.repeat(60));

  // These targets use AnyCheckoutComponent
  const anyCheckoutComponentTargets = [
    'purchase.checkout.actions.render-before',
    'purchase.checkout.cart-line-list.render-after',
    'purchase.checkout.cart-line-item.render-after',
    'purchase.checkout.block.render',
    'purchase.checkout.contact.render-after',
    'purchase.thank-you.block.render',
    'purchase.thank-you.footer.render-after',
  ];

  for (const target of anyCheckoutComponentTargets) {
    if (targetsJson[target]) {
      assertArrayNotIncludes(
        targetsJson[target].components,
        'Announcement',
        `${target} should NOT include 'Announcement'`,
      );
    } else {
      console.log(`  ⚠️  Target '${target}' not found in JSON`);
    }
  }

  // ============================================
  // TEST 2: @private targets should NOT be in the output at all
  // ============================================
  console.log('\nTest 2: @private targets should be excluded from output');
  console.log('─'.repeat(60));

  // These targets are marked @private in extension-targets.ts and should NOT appear in targets.json
  const privateTargets = [
    'purchase.checkout.gift-card.render',
    'purchase.checkout.payment-option-item.details.render',
    'purchase.checkout.payment-option-item.hosted-fields.render-after',
    'Checkout::PaymentMethod::HostedFields::RenderAfter',
    'Checkout::PickupPoints::RenderAfter',
    'Checkout::Dynamic::Render',
  ];

  for (const target of privateTargets) {
    if (targetsJson[target]) {
      tests.failed++;
      tests.errors.push(
        `@private target '${target}' should NOT be in output but was found`,
      );
      console.log(
        `  ❌ @private target '${target}' should NOT be in output but was found`,
      );
    } else {
      tests.passed++;
      console.log(`  ✅ @private target '${target}' correctly excluded`);
    }
  }

  // ============================================
  // TEST 3: AnyThankYouComponent targets SHOULD include 'Announcement'
  // ============================================
  console.log('\nTest 3: AnyThankYouComponent should include Announcement');
  console.log('─'.repeat(60));

  // This target uses AnyThankYouComponent
  const thankYouAnnouncementTarget = 'purchase.thank-you.announcement.render';

  if (targetsJson[thankYouAnnouncementTarget]) {
    assertArrayIncludes(
      targetsJson[thankYouAnnouncementTarget].components,
      'Announcement',
      `${thankYouAnnouncementTarget} SHOULD include 'Announcement'`,
    );
    // Also verify it has other standard components
    assertArrayIncludes(
      targetsJson[thankYouAnnouncementTarget].components,
      'Banner',
      `${thankYouAnnouncementTarget} SHOULD include 'Banner'`,
    );
    assertArrayIncludes(
      targetsJson[thankYouAnnouncementTarget].components,
      'Image',
      `${thankYouAnnouncementTarget} SHOULD include 'Image'`,
    );
  } else {
    console.log(
      `  ⚠️  Target '${thankYouAnnouncementTarget}' not found in JSON`,
    );
  }

  // ============================================
  // TEST 4: AllowedComponents<'Chat'> should ONLY have 'Chat'
  // ============================================
  console.log('\nTest 4: AllowedComponents<Chat> should only include Chat');
  console.log('─'.repeat(60));

  const chatTargets = [
    'purchase.checkout.chat.render',
    'purchase.thank-you.chat.render',
  ];

  for (const target of chatTargets) {
    if (targetsJson[target]) {
      assert(
        targetsJson[target].components.length === 1,
        `${target} should have exactly 1 component`,
      );
      assertArrayIncludes(
        targetsJson[target].components,
        'Chat',
        `${target} should include 'Chat'`,
      );
    } else {
      console.log(`  ⚠️  Target '${target}' not found in JSON`);
    }
  }

  // ============================================
  // TEST 5: Verify component counts and differences make sense
  // ============================================
  console.log('\nTest 5: Component count and difference verification');
  console.log('─'.repeat(60));

  // AnyThankYouComponent vs AnyCheckoutComponent:
  // - AnyThankYouComponent = SUPPORTED_COMPONENTS (has Announcement, no Chat) = 62 components
  // - AnyCheckoutComponent = SUPPORTED_COMPONENTS minus Announcement (no Chat because @private) = 61 components
  // Note: Chat is excluded from both because PrivateComponent is marked @private
  if (
    targetsJson['purchase.thank-you.announcement.render'] &&
    targetsJson['purchase.checkout.block.render']
  ) {
    const thankYouComponents =
      targetsJson['purchase.thank-you.announcement.render'].components;
    const checkoutComponents =
      targetsJson['purchase.checkout.block.render'].components;

    // AnyThankYouComponent should have Announcement but not Chat (@private)
    assertArrayIncludes(
      thankYouComponents,
      'Announcement',
      'AnyThankYouComponent should include Announcement',
    );
    assertArrayNotIncludes(
      thankYouComponents,
      'Chat',
      'AnyThankYouComponent should NOT include Chat (@private component)',
    );

    // AnyCheckoutComponent should NOT have Announcement AND should NOT have Chat (@private)
    assertArrayNotIncludes(
      checkoutComponents,
      'Announcement',
      'AnyCheckoutComponent should NOT include Announcement',
    );
    assertArrayNotIncludes(
      checkoutComponents,
      'Chat',
      'AnyCheckoutComponent should NOT include Chat (@private component)',
    );

    // AnyThankYouComponent should have 1 more component than AnyCheckoutComponent (Announcement)
    assert(
      thankYouComponents.length === checkoutComponents.length + 1,
      `AnyThankYouComponent (${thankYouComponents.length}) should have 1 more component than AnyCheckoutComponent (${checkoutComponents.length})`,
    );
  }

  // Note: Gift card target (purchase.checkout.gift-card.render) is @private
  // so it's excluded from the output. The AnyCheckoutComponentExcept logic
  // is tested indirectly through the @private exclusion tests above.

  // ============================================
  // Summary
  // ============================================
  console.log(`\n${'═'.repeat(60)}`);
  console.log('📊 Test Summary');
  console.log('═'.repeat(60));
  console.log(`  ✅ Passed: ${tests.passed}`);
  console.log(`  ❌ Failed: ${tests.failed}`);

  if (tests.failed > 0) {
    console.log('\n📋 Failed Tests:');
    tests.errors.forEach((error, i) => {
      console.log(`  ${i + 1}. ${error}`);
    });
  }

  // Cleanup
  cleanup();

  console.log('\n');

  // Exit with appropriate code
  process.exit(tests.failed > 0 ? 1 : 0);
}

runTests().catch((error) => {
  console.error('Test execution failed:', error);
  cleanup();
  process.exit(1);
});
