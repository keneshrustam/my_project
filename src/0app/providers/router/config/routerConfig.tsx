import {RouteProps} from "react-router-dom"
import React from "react";
import {Main, CardManga, MangaContent, MangaTops} from "../../../../1pages";
import {Create} from "../../../../1pages/Create";
import NotFound from "../../../../1pages/NotFound/NotFound";
import {Catalog} from "../../../../1pages/Catalog";
import {Push} from "../../../../1pages/Push";
import {PushCurd} from "../../../../1pages/Push/PushCard";
import Auth from "../../../../1pages/Auth/ui/Auth";
import Form from "../../../../3features/componets/Form/Form";

enum AppRoutes {
    MAIN = "main",
    NOT_FOUND = "not_found",
    CARDMANGA = "cardmanga",
    MANGACONTENT = "mangaContent",
    MANGATOPS = "mangaTops",
    CREATE = "create",
    CATALOG = "catalog",
    PUSH = "push",
    AUTH = "auth",
    FORM = "form"
}

export type AppRouteProps = RouteProps & {}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.CARDMANGA]: "/manga/:itemId",
    [AppRoutes.MANGACONTENT]: "/manga/:mangaId/:chapter",
    [AppRoutes.MANGATOPS]: "/manga/mangaTops",
    [AppRoutes.CREATE]: "/manga/create",
    [AppRoutes.CATALOG]: "/manga/catalog",
    [AppRoutes.PUSH]: "/manga/push",
    [AppRoutes.AUTH]: "/manga/auth",
    [AppRoutes.FORM]: "/manga/form",



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
        element: <NotFound/>
    },
    [AppRoutes.CARDMANGA]: { // Динамический путь с параметром маршрута
        path: RoutePaths.cardmanga,
        element: <CardManga/>
    },
    [AppRoutes.MANGACONTENT]: { // Динамический путь с параметром маршрута
        path: RoutePaths.mangaContent,
        element: <MangaContent/>
    },
    [AppRoutes.MANGATOPS]: { // Динамический путь с параметром маршрута
        path: RoutePaths.mangaTops,
        element: <MangaTops/>
    },
    [AppRoutes.CREATE]: { // Динамический путь с параметром маршрута
        path: RoutePaths.create,
        element: <Create/>
    },
    [AppRoutes.CATALOG]: { // Динамический путь с параметром маршрута
        path: RoutePaths.catalog,
        element: <Catalog/>
    },
    [AppRoutes.PUSH]: { // Динамический путь с параметром маршрута
        path: RoutePaths.push,
        element: <PushCurd/>
    },
    [AppRoutes.AUTH]: { // Динамический путь с параметром маршрута
        path: RoutePaths.auth,
        element: <Auth/>
    },
    [AppRoutes.FORM]: { // Динамический путь с параметром маршрута
        path: RoutePaths.form,
        element: <Form type={"register"}/>
    }
};


