import React, { ReactNode } from 'react';
import { InputName, InputPhone } from './components';

interface propsFormGroup {
    children: ReactNode;
}

function FormGroup({ children }: propsFormGroup) {
    return <>{children}</>;
}

export default FormGroup;

FormGroup.InputName = InputName;
FormGroup.InputPhone = InputPhone;