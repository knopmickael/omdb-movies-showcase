import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { ResponsiveGridLayout } from "@ui5/webcomponents-react";
import './App.css';

function App() {
  return (
    <>
      <ResponsiveGridLayout
        className="gap-0"
      >
        <Header />
        <Main />
        <Footer />
      </ResponsiveGridLayout>
    </>
  );
}

export default App;
