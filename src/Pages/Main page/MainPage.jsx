import { useContext } from "react";
import { Categories } from "../../Components/Categories/Categories";
import { Discount } from "../../Components/Discount/Discount";
import { Form } from "../../Components/Form/Form";
import { Sale } from "../../Components/Sale/Sale";
import { Footer } from "../../Layaut/Footer/Footer";
import { Header } from "../../Layaut/Header/Header";
import { ThemeContext } from "../../Providers/Context";

function MainPage() {
  const [, , , background] = useContext(ThemeContext);
  return (
    <div style={background}>
      <Header />
      <Discount />
      <Categories />
      <Form />
      <Sale />
      <Footer />
    </div>
  );
}

export default MainPage;
