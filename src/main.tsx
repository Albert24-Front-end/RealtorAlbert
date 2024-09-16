import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ClerkProvider } from "@clerk/clerk-react";
import { ThemeProvider } from "styled-components";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import { PUBLISHABLE_KEY } from "./utils/constants.ts";
import { theme } from "./theme/theme.ts";
import { dark } from "@clerk/themes";

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )

const PUBLISHABLE_KEY = "pk_test_YXNzdXJpbmctZm94LTgwLmNsZXJrLmFjY291bnRzLmRldiQ"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{ baseTheme: dark }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/main"
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <div className="container">
              <RouterProvider router={router} />
            </div>
          </div>
        </ThemeProvider>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
