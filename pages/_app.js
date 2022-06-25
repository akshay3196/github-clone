import "../styles/globals.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ClerkProvider
        {...pageProps}
        frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}
      >
        <Component {...pageProps} />
      </ClerkProvider>
    </Provider>
  );
}

export default MyApp;
