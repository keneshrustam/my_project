import { DropdownItem } from "../../../../shared/ui/Popups/components/Dropdown/Dropdown";

type TGetDropdownItemsProps = {
    onLogout: () => void;
    isAuth: boolean;
    
};
export const getDropdownItems = (props: TGetDropdownItemsProps): DropdownItem[] => {
    const {
        onLogout,
        isAuth
    } = props;
    
    return isAuth ? [
        {
            content:'Профиль',
            href:"/profile"
        }, {
            content:"Выйти",
            onClick: onLogout
        }
    ] : [{
        content:"Выйти",
        href: "/auth"
    }];
};
