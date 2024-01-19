import React from "react";
import * as Yup from "yup";
import {Formik, Field, ErrorMessage, Form} from "formik"

interface FormData {
    data?: any
}

const Form_ = (props: FormData): any => {

    const validators: any = Yup.object({
        FirstName: Yup.string()
            .required("Campo es requerido"),
        LastName: Yup.string()
            .required("Campo requerido"),
        MotherLastName: Yup.string(),
        Email: Yup.string()
            .required("Campo requerido")
            .email("Correo electrónico inválido"),
        CelNumber: Yup.number()
            .required("Campo requerido")
            .min(10, "Mínimo son 10 caracteres"),
    });


    return(
        <>
            <Formik initialValues={{
                FirstName: "",
                LastName: "",
                MotherLastName: "",
                Email: "",
                CelNumber: ""
            }} validationSchema={validators} onSubmit={(values) => console.log(values)}>
                <Form>
                    <div className="container mt-5">
                        <h4 className="text-center">Formulario</h4>
                    </div>
                    <div className="col-8 m-auto">
                        <div className="row">
                            <div className="form-group col-4">
                                <label htmlFor="FirstName" className="label-control">Nombre(s)</label>
                                <Field 
                                    className='form-control'
                                    name='FirstName'
                                    placeholder=''
                                    type='text'
                                ></Field>
                                <ErrorMessage
                                    name='FirstName'
                                    component='div'
                                    className='field-error text-danger'
                                />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="LastName" className="label-control">Apellido paterno</label>
                                <Field 
                                    className='form-control'
                                    name='LastName'
                                    placeholder=''
                                    type='text'
                                ></Field>
                                <ErrorMessage
                                    name='LastName'
                                    component='div'
                                    className='field-error text-danger'
                                />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="MotherLastName" className="label-control">Apellido materno</label>
                                <Field 
                                    className='form-control'
                                    name='MotherLastName'
                                    placeholder=''
                                    type='text'
                                ></Field>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Form_