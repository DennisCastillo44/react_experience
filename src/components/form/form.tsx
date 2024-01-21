import React, { useState } from "react";
import * as Yup from "yup";
import {Formik, Field, ErrorMessage, Form} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface FormData {
    data?: any
}

const Form_ = (props: FormData): any => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

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
        UserName: Yup.string()
            .required("Campo es requerido"),
        Password: Yup.string()
            .required("Campo requerido"),
        Active: Yup.boolean(),
    });

    const submitForm = (jsonForm: any): void => {

        console.log(jsonForm);
    }

    return(
        <>
            <Formik initialValues={{
                FirstName: "",
                LastName: "",
                MotherLastName: "",
                Email: "",
                CelNumber: "",
                UserName: "",
                Password: "",
                Active: true
            }} validationSchema={validators} onSubmit={(values) => submitForm(values)}>
                <Form>
                    <div className="container mt-5">
                        <h4 className="text-center">Formulario</h4>
                    </div>
                    <div className="col-8 m-auto">
                        <div className="my-3 fw-bold">Datos personales</div>
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
                            <div className="form-group col-4 mt-3">
                                <label htmlFor="Email" className="label-control">Correo electrónico</label>
                                <Field 
                                    className='form-control'
                                    name='Email'
                                    placeholder=''
                                    type='text'
                                ></Field>
                                <ErrorMessage
                                    name='Email'
                                    component='div'
                                    className='field-error text-danger'
                                />
                            </div>
                            <div className="form-group col-4 mt-3">
                                <label htmlFor="CelNumber" className="label-control">Numero telefónico</label>
                                <Field 
                                    className='form-control'
                                    name='CelNumber'
                                    placeholder=''
                                    type='text'
                                ></Field>
                                <ErrorMessage
                                    name='CelNumber'
                                    component='div'
                                    className='field-error text-danger'
                                />
                            </div>
                        </div>
                        <div className="my-3 fw-bold">Sección de usuario</div>
                        <div className="row">
                            <div className="form-group col-4">
                                <label htmlFor="UserName" className="label-control">Usuario</label>
                                <Field 
                                    className='form-control'
                                    name='UserName'
                                    placeholder=''
                                    type='text'
                                ></Field>
                                <ErrorMessage
                                    name='UserName'
                                    component='div'
                                    className='field-error text-danger'
                                />
                            </div>
                            <div className="form-group col-4">
                                <label htmlFor="Password" className="label-control">Contraseña</label>
                                <div className="input-group">
                                    <Field 
                                        className='form-control'
                                        name='Password'
                                        placeholder=''
                                        type={showPassword ? "text" : "password"}
                                    ></Field>
                                    <div className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                                        {showPassword ? <FontAwesomeIcon icon={faEyeSlash} />: <FontAwesomeIcon icon={faEye} />} 
                                    </div>
                                </div>
                                <ErrorMessage
                                    name='Password'
                                    component='div'
                                    className='field-error text-danger'
                                />
                            </div>
                            <div className="form-group col-4 d-flex align-items-center">
                                <div className="form-check form-switch">
                                    <label htmlFor="Active" className="label-control">Activar usuario</label>
                                    <Field 
                                        className='form-check-input'
                                        name='Active'
                                        type='checkbox'
                                    ></Field>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-5">
                                <button className="btn btn-primary" type="submit">Registrar</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default Form_