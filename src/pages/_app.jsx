import { useReducer } from "react";
import Layout from "../../components/Layout";
import "@/styles/globals.css";
import initalState from "@/store/state";
import InitailContext from "@/store/context";
import mainReducer from "@/store/reducer";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initalState);

  return (
    <InitailContext.Provider value={{ state, dispatch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </InitailContext.Provider>
  );
}
