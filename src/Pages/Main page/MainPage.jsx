import { Discount } from "../../Components/Discount/Discount";
import { Form } from "../../Components/Form/Form";
import { Footer } from "../../Layaut/Footer/Footer";
import { Header } from "../../Layaut/Header/Header";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <Discount />
      <Form />
      <Footer />
    </div>
  );
};
