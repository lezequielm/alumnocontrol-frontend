import React, {useEffect, useState} from "react";
import {renderRoutes} from "react-router-config";
import loggedRoutes from "./loggedRoutes";
import logonRoutes from "./logonRoutes";

const AppRouter = () => {
    let sessionToken = sessionStorage.getItem('sessionToken');

    return (
        <>
            {
                sessionToken ? renderRoutes(loggedRoutes) : renderRoutes(logonRoutes)
            }
        </>
    )
}

export default AppRouter;