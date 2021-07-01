import {URL} from 'url';
import {argumentParserFor, parseDevelopmentServerConfig} from './utilities';

describe('argumentParserFor', () => {
  test('creates a function', () => {
    expect(argumentParserFor([])).toBeInstanceOf(Function);
  });

  test('creates a function for accessing individual arguments', () => {
    const fetch = argumentParserFor(['--shop=shop1.myshopify.io']);
    expect(fetch('shop')).toBe('shop1.myshopify.io');
  });
});

describe('parseDevelopmentServerConfig', () => {
  const args = [
    '--shop=shop1.myshopify.io',
    '--resourceUrl=/cart/1:1',
    '--publicUrl=https://example.com',
    '--port=5678',
  ];
  const fetchArgument = argumentParserFor(args);
  const createWebpackConfiguration = () => ({});

  test('includes shop', () => {
    expect(
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration}),
    ).toMatchObject({
      shop: 'shop1.myshopify.io',
    });
  });

  test('includes resource URL', () => {
    expect(
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration}),
    ).toMatchObject({
      resourceUrl: '/cart/1:1',
    });
  });

  test('includes public URL', () => {
    expect(
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration}),
    ).toMatchObject({
      publicUrl: 'https://example.com',
    });
  });

  test('includes port', () => {
    expect(
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration}),
    ).toMatchObject({
      port: '5678',
    });
  });

  test('includes filename', () => {
    expect(
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration}),
    ).toMatchObject({
      filename: 'extension.js',
    });
  });

  test('includes extensionPoint', () => {
    const fetchArgument = argumentParserFor(['--extension-point=test']);
    expect(
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration}),
    ).toMatchObject({
      extensionPoint: 'test',
    });
  });

  describe('scriptUrl', () => {
    test('points to localhost:8910 when no public url and port is provided', () => {
      const fetchArgument = argumentParserFor([]);
      expect(
        parseDevelopmentServerConfig({
          fetchArgument,
          createWebpackConfiguration,
        }),
      ).toMatchObject({
        scriptUrl: 'http://localhost:8910/assets/extension.js',
      });
    });

    test('supports custom port', () => {
      const fetchArgument = argumentParserFor(['--port=1234']);
      expect(
        parseDevelopmentServerConfig({
          fetchArgument,
          createWebpackConfiguration,
        }),
      ).toMatchObject({
        scriptUrl: 'http://localhost:1234/assets/extension.js',
      });
    });

    test('points to public URL if one was provided and ignores port', () => {
      const fetchArgument = argumentParserFor([
        '--port=1234',
        '--publicUrl=https://example.com',
      ]);
      expect(
        parseDevelopmentServerConfig({
          fetchArgument,
          createWebpackConfiguration,
        }),
      ).toMatchObject({
        scriptUrl: 'https://example.com/assets/extension.js',
      });
    });
  });

  describe('permalinkUrl', () => {
    test('returns undefined if resourceUrl, publicUrl or shop are missing', () => {
      const argsWithoutShop = [
        '--resourceUrl=/cart/1:1',
        '--publicUrl=https://example.com',
      ];
      const argsWithoutResourceUrl = [
        '--publicUrl=https://example.com',
        '--shop=shop1.myshopify.io',
      ];
      const argsWithoutPublicUrl = [
        '--shop=shop1.myshopify.io',
        '--resourceUrl=/cart/1:1',
      ];
      const configWithoutPermalinkUrl = {permalinkUrl: undefined};

      expect(
        parseDevelopmentServerConfig({
          fetchArgument: argumentParserFor(argsWithoutShop),
          createWebpackConfiguration,
        }),
      ).toMatchObject(configWithoutPermalinkUrl);

      expect(
        parseDevelopmentServerConfig({
          fetchArgument: argumentParserFor(argsWithoutResourceUrl),
          createWebpackConfiguration,
        }),
      ).toMatchObject(configWithoutPermalinkUrl);

      expect(
        parseDevelopmentServerConfig({
          fetchArgument: argumentParserFor(argsWithoutPublicUrl),
          createWebpackConfiguration,
        }),
      ).toMatchObject(configWithoutPermalinkUrl);
    });

    test('returns a permalinkUrl if all necessary command line flags are present', () => {
      const args = [
        '--resourceUrl=/cart/1:1',
        '--publicUrl=https://example.com',
        '--shop=shop1.myshopify.com',
      ];

      const permalink = new URL('https://shop1.myshopify.com/cart/1:1');
      permalink.searchParams.append('dev', 'https://example.com/query');
      const configWithPermalink = {permalinkUrl: permalink.toString()};

      expect(
        parseDevelopmentServerConfig({
          fetchArgument: argumentParserFor(args),
          createWebpackConfiguration,
        }),
      ).toMatchObject(configWithPermalink);
    });
  });

  describe('passwordPageUrl', () => {
    test('returns undefined if shop flag is missing', () => {
      const configWithoutPasswordPageUrl = {
        passwordPageUrl: undefined,
      };
      expect(
        parseDevelopmentServerConfig({
          fetchArgument: argumentParserFor([]),
          createWebpackConfiguration,
        }),
      ).toMatchObject(configWithoutPasswordPageUrl);
    });

    test('returns https://<shop>/password if shop flag is present', () => {
      const configWithPasswordPageUrl = {
        passwordPageUrl: 'https://shop1.myshopify.io/password',
      };
      expect(
        parseDevelopmentServerConfig({
          fetchArgument: argumentParserFor(['--shop=shop1.myshopify.io']),
          createWebpackConfiguration,
        }),
      ).toMatchObject(configWithPasswordPageUrl);
    });
  });

  describe('webpackConfiguration', () => {
    test('runs in development mode', () => {
      const createWebpackConfiguration = jest.fn();
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration});
      expect(createWebpackConfiguration).toBeCalledWith(
        settingsContaining({development: true}),
      );
    });

    test('correct output settings', () => {
      const createWebpackConfiguration = jest.fn();
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration});
      expect(createWebpackConfiguration).toBeCalledWith(
        settingsContaining({
          output: {
            filename: 'extension.js',
            publicPath: '/assets/',
          },
        }),
      );
    });

    test('websocket points to localhost:8910 by default', () => {
      const fetchArgument = argumentParserFor([]);
      const createWebpackConfiguration = jest.fn();
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration});
      expect(createWebpackConfiguration).toBeCalledWith(
        settingsContaining({
          hotOptions: {
            https: false,
            webSocket: {
              host: 'localhost',
              port: 8910,
              path: '/build',
            },
          },
        }),
      );
    });

    test('websocket points to the public endpoint if --publicUrl was provided', () => {
      const fetchArgument = argumentParserFor([
        '--publicUrl=https://example.com/',
      ]);
      const createWebpackConfiguration = jest.fn();
      parseDevelopmentServerConfig({fetchArgument, createWebpackConfiguration});
      expect(createWebpackConfiguration).toBeCalledWith(
        settingsContaining({
          hotOptions: {
            https: true,
            webSocket: {
              host: 'example.com',
              port: 443,
              path: '/build',
            },
          },
        }),
      );
    });

    const settingsContaining = (settings: Record<string, any>) =>
      expect.objectContaining(settings);
  });
});
