import Input from "../../Input/Input";
import SpanForForm from "../../SpanForForm/SpanForForm";

function InputPhone(): JSX.Element {
  const handleChangeInput = () => {};
  return (
    <>
      <Input
        handleChange={handleChangeInput}
        placeholder="Телефон 89013337722"
        required
        name="phone"
        pattern="[0-9]{11}"
      ></Input>
      <SpanForForm message="ошибка"></SpanForForm>
    </>
  );
}

export default InputPhone;
