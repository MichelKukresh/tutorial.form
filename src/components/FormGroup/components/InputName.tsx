import { ChangeEvent } from "react";
import { useFormWithValidation } from "../../../utils";
import Input from "../../Input/Input";
import SpanForForm from "../../SpanForForm/SpanForForm";

function InputName(): JSX.Element {

   
  const {handleChange, errors } = useFormWithValidation(); 

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(event);

  };

  return (
    <>
      <Input
        handleChange={  handleChangeInput }
        placeholder="Ваше имя 2"
        name="name"
        required
        minLength={4}
        maxLength={20}
      />
      <SpanForForm message={errors["name"]}></SpanForForm>
    </>
  );
}

export default InputName;
