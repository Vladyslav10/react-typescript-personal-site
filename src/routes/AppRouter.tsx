import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import NotFound from "../pages/notFound/NotFound";
import { privateRout, publicRoutes } from "./routes";


const AppRouter:FC = () => {
    const {isAuth} = useTypedSelector(state => state.global)

    return(
       <Routes>
           {publicRoutes.map(rout => (
                <Route
                    path={rout.path} 
                    element={<rout.component/>} 
                    key={rout.path}
                />
            ))}
            {isAuth && privateRout.map(rout => (
                <Route
                    path={rout.path}
                    element={<rout.component/>}
                    key={rout.path}
                />
            ))} 
           <Route path="*" element={<NotFound/>}/>
       </Routes>
    );
};

export default AppRouter;