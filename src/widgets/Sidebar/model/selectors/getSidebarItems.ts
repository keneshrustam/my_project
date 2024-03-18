import { FaShoppingBag } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

import { TSidebarItems } from "../types/sidebar";

export const getSidebarItems = (): TSidebarItems => {
    return [
        {
            title: "Главная страница",
            href: "/",
            Icon: IoHomeSharp
        },
        {
            title: "Товары",
            href: "/product_list",
            Icon: FaShoppingBag
        }
    ];
};