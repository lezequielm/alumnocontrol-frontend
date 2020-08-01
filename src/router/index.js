import React from "react";
import {renderRoutes} from "react-router-config";
import rutasAlumnos from "./rutasAlumnos";

const appRouter = () => {
    return (
        <>
            {
                renderRoutes(rutasAlumnos)
            }
        </>
    )
}

export default appRouter;