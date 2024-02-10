
 import { RouteProps } from "react-router-dom"
 import React from "react";
 import Main from "../../pages/main/Main";




 enum AppRoutes {
     MAIN = "main",
     NOT_FOUND = "not_found",
     CONTACTS = "contacts"
 }

 export type AppRouteProps = RouteProps &  {}

 export const RoutePaths: Record<AppRoutes, string> = {
     [AppRoutes.MAIN]: "/",
     [AppRoutes.CONTACTS]: "/contacts",


     //last
     [AppRoutes.NOT_FOUND]: "*"
 };


 export const routerConfig: Record<AppRoutes, AppRouteProps> = {
     [AppRoutes.MAIN]: {
         path: RoutePaths.main,
         element: <Main/>
     },
     [AppRoutes.NOT_FOUND]: {
         path: RoutePaths.not_found,
         element: <div></div>
     },
     [AppRoutes.CONTACTS]: {
         path: RoutePaths.contacts,
         element: <div></div>
     }
 };


