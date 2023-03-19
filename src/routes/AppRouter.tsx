import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import { routes } from "./routes";


const AppRouter:FC = () => {

    return(
       <Routes>
           {routes.map(rout => (
                <Route
                    path={rout.path} 
                    element={<rout.component/>} 
                    key={rout.path}
                />
            ))}
           <Route path="*" element={<Main/>}/>
       </Routes>
    );
};

export default AppRouter;