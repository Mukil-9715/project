import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import Registerform from "./Component/Pages/Registerform";
import LoginPage from "./Component/Pages/LoginPage";
import LogPage from "./Component/Pages/Logpag";
import Home from "./Component/Pages/Home";
import Productspage from "./Component/Pages/ProductsPage";
import AllDataScaffoldContext from "./Component/ScaffoldContext/DataContext";

//implenting lazy loader

// const Registerform = React.lazy(()=> import ("./Component/Pages/Registerform"))
// const LoginPage = React.lazy(()=> import ("./Component/Pages/LoginPage"))
// const Home = React.lazy(()=> import ("./Component/Pages/Home"))

function App() {
  let { setScaffold } = useContext(AllDataScaffoldContext);

  const [postResponse, setpostResponse] = useState([]);

  useEffect(() => {
    function getData() {
      fetch("http://localhost:3000/CardDetails")
        .then((res) => res.json())
        .then((message) => {
          // debugger;
          setScaffold(message);
        });
    }
    getData();
  }, []);

  useEffect(() => {
    function getData() {
      fetch("http://localhost:3000/posts")
        .then((res) => res.json())
        .then((message) => {
          // debugger;
          setpostResponse(message);
        });
    }
    getData();
  }, []);

  return (
    <div>
      {/* <React.Suspense fallback ={<span>Loading .... </span>}> */}

      <Routes>
        {/* <Route path="/" element={<LogPage respond={postResponse}  />} /> */}
        <Route path="/" element={<LoginPage respond={postResponse} />} />
        <Route path="/Registerform" element={<Registerform />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/CardDetails" element={<Productspage />} />
      </Routes>
      {/* </React.Suspense> */}
    </div>
  );
}

export default App;
