import React, { Suspense, lazy } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Index_ from './components/main';

const Main = lazy(() => import("./components/main"));
const Basic = lazy(() => import("./components/basicComponent"));

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Main, //<Suspense fallback="Cargando"><Main></Main></Suspense>,
    children: [
      {
        path: "basic-component",
        element: <Suspense><Basic></Basic></Suspense> //Basic
      }
    ]
  }
])

function App() {

  return (
    <>
      <React.StrictMode>
        <RouterProvider router={routes}></RouterProvider>
      </React.StrictMode>
    </>
  );
}

function delayForDemo(promise: any) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default App;
