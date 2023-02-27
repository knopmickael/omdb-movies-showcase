import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { ResponsiveGridLayout } from "@ui5/webcomponents-react";
import "./assets/App.css";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

function App() {
  const store = createStore(rootReducer);

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
