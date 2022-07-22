import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";


export function Allroutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
             <Route path="/login" element={<Login/>} />   
          
        </Routes>
    )
}