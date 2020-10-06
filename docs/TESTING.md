# Testing

## Testing Locally

Run `shopify serve` to start the simulator, which runs your extension code locally. Navigate to the localhost url logged in your CLI to see the simulator. Here, you can see the changes you have made locally.

### Adding mock data

In the simulator, you can add mock data for each extension point.

**Note:** The shape of the data is different for each extension point.

## Testing on a Shop

Once your Argo extension is ready, push your code to Shopify and publish a version to see your extension in a Shopify store.

**Note:** Currently, you need to publish a version of your extension before running it on a Shopify store.

1. Run `shopify register` in the CLI to register your extension to your app.

1. Run `shopify push` to push your code to Shopify.

1. Navigate to the extension's management page on the Partners Dashboard.

1. The code you pushed to Shopify is stored as a draft on this page. Create a new version of the extension from the Draft.

1. Publish the version you created to take it live for all stores that have this app installed.
