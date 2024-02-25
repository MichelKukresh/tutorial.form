type propsInputBase = {
  handleChange: () => void;
  placeholder: string;
  name: string;
};

type propsInputAdditional = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
};

type propsInput = propsInputBase & propsInputAdditional;

function Input({
  handleChange,
  placeholder,
  name,
  ...props
}: propsInput): JSX.Element {
  return (
    <input
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      {...props}
    ></input>
  );
}

export default Input;
