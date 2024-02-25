import { ChangeEvent, useState } from "react";

type FormValues = {
  [key: string]: string;
};

type FormErrors = {
  [key: string]: string;
};

const useFormWithValidation = () => {
  const [values, setValues] = useState<FormValues>({});
  const [errors, setErrors] = useState<FormErrors>({});
  const [isValid, setIsValid] = useState(false);


const handleChange = (
 // event: ChangeEvent<HTMLInputElement>,
 event: React.ChangeEvent<HTMLInputElement>   
) => {
  const target = event.target;
  const name = target.name;
  const value = target.value;

  setValues({ ...values, [name]: value });
  setErrors({ ...errors, [name]: target.validationMessage });
  const form = target.closest("form");
  if (form) {
    setIsValid(form.checkVisibility());
  } else {
    setIsValid(false)
  }


  console.log(values, errors)
 
};
 return {
    values,
    handleChange,
    errors,
    isValid
       
  };

};
export default useFormWithValidation;
