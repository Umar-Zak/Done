import React from 'react';
import {useFormikContext} from "formik"
import Button from '../Button';
function SubmitButton({ title }) {
    const {handleSubmit}=useFormikContext()
    return (
       <Button text={title} onPress={handleSubmit} />
    );
}

export default SubmitButton;