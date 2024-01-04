import './App.css';
import { MainPage } from './Pages/Main page/MainPage';
import { CategoriesPage } from './Pages/CategoriesPage/CategoriesPage';
import './reset.css';
import { SingleProductPage } from './Pages/SingleProductPage/SingleProductPage';


function App() {
  return (
    <div className="App">
      <MainPage />
      <CategoriesPage />
      <SingleProductPage />
    </div>
  );
}

export default App;
