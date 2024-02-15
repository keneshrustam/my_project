 import { RouteProps } from "react-router-dom"
 import React from "react";
 import {Main, CardManga, MangaContent} from "../../pages";


 enum AppRoutes {
     MAIN = "main",
     NOT_FOUND = "not_found",
     CONTACTS = "contacts",
     CARDMANGA = "cardmanga",
     MANGACONTENT = "mangaContent"
 }

 export type AppRouteProps = RouteProps &  {}

 export const RoutePaths: Record<AppRoutes, string> = {
     [AppRoutes.MAIN]: "/",
     [AppRoutes.CONTACTS]: "/contacts",
     [AppRoutes.CARDMANGA]:"/manga/:itemId",
     [AppRoutes.MANGACONTENT]:"/manga/:itemId/:chapters",



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
     },
     [AppRoutes.CARDMANGA]: { // Динамический путь с параметром маршрута
         path: RoutePaths.cardmanga,
         element: <CardManga/>
     },
     [AppRoutes.MANGACONTENT]: { // Динамический путь с параметром маршрута
         path: RoutePaths.mangaContent,
         element: <MangaContent/>
     }
 };


