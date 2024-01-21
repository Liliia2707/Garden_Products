import "./App.css";
import { MainPage } from "./Pages/Main page/MainPage";
import { Context } from "./Providers/Context";

function App() {
  return (
    <Context>
      <div>
        <MainPage />
        {/* <CategoriesPage />
        <SingleProductPage /> */}
      </div>
    </Context>
  );
}

export default App;
