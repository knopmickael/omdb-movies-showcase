import "./assets/App.css";
import { ResponsiveGridLayout } from "@ui5/webcomponents-react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ResponsiveGridLayout className="gap-0">
          <Header />
          <Main />
          <Footer />
        </ResponsiveGridLayout>
      </Provider>
    </>
  );
}

export default App;
