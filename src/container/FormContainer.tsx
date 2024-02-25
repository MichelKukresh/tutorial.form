import { FormGroup } from "../components";

type propsFormContainer = {
  children: React.ReactNode;
};

function FormContainer(props: propsFormContainer) {
  return (
    <form>
      Форма
      <FormGroup>
        <FormGroup.InputName/>
        <FormGroup.InputPhone/>
      </FormGroup>
    </form>
  );
}

export default FormContainer;
