import { useContext } from "react";
import { Categories } from "../../Components/Categories/Categories";
import { Discount } from "../../Components/Discount/Discount";
import { Form } from "../../Components/Form/Form";
import { Sale } from "../../Components/Sale/Sale";
import { ThemeContext } from "../../Providers/Context";

export const MainPage = () => {
  const [, , , background] = useContext(ThemeContext);
  return (
    <div style={background}>
      <Discount />
      <Categories />
      <Form />
      <Sale />
    </div>
  );
};
