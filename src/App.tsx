import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Index_ from './components/main';
import ApiComponent from './components/apiComponent';

const Main = lazy(() => import("./components/main"));
const Basic = lazy(() => import("./components/basicComponent"));
const ApiExample = lazy(() => import("./components/apiComponent"));

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Main, //<Suspense fallback="Cargando"><Main></Main></Suspense>,
    children: [
      {
        path: "basic-component",
        element: <Suspense fallback="Cargando..."><Basic></Basic></Suspense> //Basic
      },
      {
        path: "api-example",
        element: <Suspense fallback="Cargando..."><ApiExample></ApiExample></Suspense> //Api
      }
    ]
  }
])

function App() {

  return (
      <RouterProvider router={routes}></RouterProvider>
  );
}

function delayForDemo(promise: any) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
