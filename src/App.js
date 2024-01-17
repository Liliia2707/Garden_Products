import "./App.css";
import { CategoriesPage } from "./Pages/CategoriesPage/CategoriesPage";
import { MainPage } from "./Pages/Main page/MainPage";
import { SingleProductPage } from "./Pages/SingleProductPage/SingleProductPage";
import { Context } from "./Providers/Context";

function App() {
  return (
    <Context>
      <div>
        <MainPage />
        <CategoriesPage />
        <SingleProductPage />
      </div>
    </Context>
  );
}

export default App;
