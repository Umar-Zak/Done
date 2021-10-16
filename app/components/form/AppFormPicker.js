import React from 'react';
import {useFormikContext} from "formik"
import AppPicker from '../AppPicker';
import { ErrorMessage } from '.';

function AppFormPicker({ items, name, placeholder }) {
    const {errors,setFieldValue,touched,values}=useFormikContext()
    return (
        <>
            <AppPicker
                placeholder={placeholder}
                list={items} onSelectedItem={item=>setFieldValue(name,item) }
                selectedItem={values[name]}
            />
            <ErrorMessage visible={touched[name]} error={errors[name]} />
        </>
    );
}

export default AppFormPicker;