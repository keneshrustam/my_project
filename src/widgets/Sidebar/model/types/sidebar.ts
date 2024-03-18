import { IconType } from "react-icons";

export type TSidebarItem = {
    title: string;
    href: string;
    Icon: IconType;
}

export type TSidebarItems = TSidebarItem[]