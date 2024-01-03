import { Catigories } from "../../Components/Categories/Categories";
import { Discount } from "../../Components/Discount/Discount";
import { Form } from "../../Components/Form/Form";
import { Sale } from "../../Components/Sale/Sale";
import { Footer } from "../../Layaut/Footer/Footer";
import { Header } from "../../Layaut/Header/Header";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Discount />
      <Catigories />
      <Form />
      <Sale />
      <Footer />
    </div>
  );
};
