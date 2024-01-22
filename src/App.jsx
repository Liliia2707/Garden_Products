import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer } from "./Layaut/Footer/Footer";
import { Header } from "./Layaut/Header/Header";
import { Context } from "./Providers/Context";

function App() {
  return (
    <Context>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Context>
  );
}

export default App;
