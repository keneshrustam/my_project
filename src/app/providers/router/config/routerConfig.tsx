import { RouteProps } from "react-router-dom";

import { AuthPage } from "../../../../pages/AuthPage";
import { MainPage } from "../../../../pages/MainPage";
import { NotFoundPage } from "../../../../pages/NotFoundPage";
import { ProductDetailsPage } from "../../../../pages/ProductDetailsPage";
import ProductListPage from "../../../../pages/ProductListPage/ui/ProductListPage";
import { ProfilePage } from "../../../../pages/ProfilePage";

enum AppRoutes {
    MAIN = "main",
    NOT_FOUND = "not_found",
    PRODUCT_LIST = "product_list",
    PRODUCT_DETAILS = "product_details",
    AUTH = "auth",
    PROFILE = "profile"
}

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.PRODUCT_LIST]: "/product_list",
    [AppRoutes.PRODUCT_DETAILS]: "/product_details/:id",
    [AppRoutes.AUTH]: "/auth",
    [AppRoutes.PROFILE]: "profile",

    // last
    [AppRoutes.NOT_FOUND]: "*"
};

export const routerConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AppRoutes.PRODUCT_LIST]: {
        path: RoutePaths.product_list,
        element: <ProductListPage />,
        authOnly: true
    },
    [AppRoutes.PRODUCT_DETAILS]: {
        path: RoutePaths.product_details,
        element: <ProductDetailsPage />,
        authOnly: true
    },
    [AppRoutes.AUTH]: {
        path: RoutePaths.auth,
        element: <AuthPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />
    },
    [AppRoutes.PROFILE]: {
        path: RoutePaths.profile,
        element: <ProfilePage />,
        authOnly: true
    }

};