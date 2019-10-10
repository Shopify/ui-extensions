import { AppProvider, FooterHelp, Link, Page } from "@shopify/polaris";
import { useRedirect, useRoutes } from "hookrouter";
import React from "react";

import Repl from "./repl";

const routes = {
  "/": ({id}: {id: string}) => <Repl snippetId={parseInt(id, 10)}/>,
  "/repl/:id": ({id}: {id: string}) => <Repl snippetId={parseInt(id, 10)}/>,
};

const tabs = [
  {
    id: "repl",
    content: "REPL",
    component: Repl,
    route: "/repl",
  },
];

function App() {
  useRedirect('/', '/repl/0');
  useRedirect('/repl', '/repl/0');
  const page = useRoutes(routes);

  return (
    <AppProvider>
      <Page fullWidth title="Render &amp; Execution Environment">
        <div style={{marginTop: "16px"}}>
          {page}
        </div>

        <FooterHelp>
          Learn more about the{" "}
          <Link url="https://vault.shopify.io/projects/6839">
            App Extension Render &amp; Execution Environment
          </Link>
          {" "}on Unicorn
        </FooterHelp>
      </Page>
    </AppProvider>
  );
}

export default App;
