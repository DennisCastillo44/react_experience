import React from "react";
import { Link, Outlet } from "react-router-dom";
//import navbarCss from "../css/navbar.css";

const Index_ = (): any => {

    console.log("render main");
    return(
        <>
            <div className="col-12 text-center mt-4">
                <h3>Pequeña experiencia en ReactJS</h3>
                <small>Desarrollos para practica en Reactjs</small>
            </div>
            <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="col-3">
                        <Link to="basic-component" className="link-css">Componente básico (formulario)</Link>
                    </div>
                    <div className="col-3">
                        <Link to={"/api-example"} className="link-css">Consumo de API</Link>
                    </div>
                    <div className="col-3">
                        <Link to={"/crud-component"} className="link-css">Crud</Link>
                    </div>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Index_;