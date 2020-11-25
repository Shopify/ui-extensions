### Run a local server from consumer
Installing this package in a project makes the command `argo-admin-cli` available:

`argo-admin-cli server`

_example_

```bash
argo-admin-cli server --entry="index.tsx" --port=39351 --type="PRODUCT_SUBSCRIPTION"
# access server on localhost:39351
```

| Name  | Description                                  | Required |
| ----- | -------------------------------------------- | -------- |
| entry | Entry file path of your script               | ☑️       |
| port  | Local server port                            | ☑️       |
| type  | Extension type. See Available Extensions     | ☑️       |
| env   | Local environment file. Cannot be named .env |          |

## Build an extension

`argo-admin-cli build`

_example_

```bash
argo-admin-cli build --entry="index.tsx"
```

Built files are found in the `build/` folder.

| Name   | Description                                  | Required |
| ------ | -------------------------------------------- | -------- |
| entry  | Entry file path of your script               | ☑️       |
| env    | Build environment file. Cannot be named .env |          |
| watch  | watch for build                              |          |
| output | specify output file path                     |          |

## Environment variables

You can add environment variables to customize behavior for local development and on build. Here's an example walk-through of the process.

1. Create an environment file for local development and for build.

    *.env.client.local*
    ```
    API_ENDPOINT=https://localhost:1234/api
    ```

    *.env.client*
    ```
    API_ENDPOINT=https://shopify.example.com/api
    ```

    **Note:** Don't name either file `.env` in your root folder as this is used by Shopify CLI.

1. It is recommended you ignore your production environment file if you're using source control (like `.gitignore` if using Git)

1. Add the files to your server and build scripts in `package.json`

    ```json
    "server": "argo-admin-cli server --entry=\"index.js\" --port=39351 --type=PRODUCT_SUBSCRIPTION --env=.env.client.local",
    "build": "argo-admin-cli build --entry=\"index.js\" --env=.env.client"
    ```

1. You can access your variables in your script via `process.env`.

    ```js
    console.log(process.env.API_ENDPOINT);
    ```

## Available extensions

- PRODUCT_SUBSCRIPTION
