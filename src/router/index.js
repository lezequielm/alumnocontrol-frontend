import React from "react";
import {renderRoutes} from "react-router-config";
import rutasAlumnos from "./rutasAlumnos";
import logonRoutes from "./logonRoutes";

const appRouter = () => {
    return (
        <>
            {
                renderRoutes(logonRoutes)
            }
        </>
    )
}

export default appRouter;