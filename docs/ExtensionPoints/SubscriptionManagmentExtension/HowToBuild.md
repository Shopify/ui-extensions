# How to build an extension

Once you have followed the steps in the [getting started](../../ReadMe.md#Getting%20Started) section you should be ready to start building.

## How to create an extension

At this point, you should have a local environment running with a starting point for your extension. Extension code should be written in the `src/` folder.

## How to develop

You have access to multiple components (full list for the SubscriptionManagementExtension can be found [here](./README.md#Available%20components)). You can use a combination of these components to create your extension.

There are multiple extension points associated with the Subscription Management extension. Each is triggered by a different merchant action, receives different data, and has a different responsibility.

The different extension points are:
- SubscriptionManagementCreate
- SubscriptionManagementEdit
- SubscriptionManagementRemove
- SubscriptionManagementAdd

These will be included in the starter file for your local project, which was generated when you created your subscription extension.

## How to test locally

Run `shopify serve` to start the simulator, which runs your extension code locally. Navigate to the localhost url logged in your CLI to see the simulator. Here you can see the changes you have made locally.

### How to use mock data

In the simulator, you can add mock data for each extension point.

**Note:**  The shape of the data is different for each extension point.

## Deploying, publishing and promoting

Follow the steps in [Testing on a Shop](./TestingOnShop.md) to push your code to Shopify and see it running on a Shopify store.
