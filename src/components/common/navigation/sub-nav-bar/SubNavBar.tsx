import React from "react";
import { NavLink } from "react-router-dom";
import { IRoute } from "../../../../routes/routes";
import { Icon } from "../../icons/Icon";
import style from "./SubNavBar.module.scss";

export const SubNavBar: React.FC<{ routes: IRoute[] }> = ({ 
    routes 
}) => {
    return (
        <div className={style.subNavbarContainer}>
            <nav className={style.subNavbar}>
                { routes.map(subRoute => (
                    <NavLink 
                        key={subRoute.name} 
                        to={subRoute.path} 
                        className={style.subNavLink}
                        activeClassName={style.subNavLinkActive}
                    >
                        <div className={style.routeName}>
                            <Icon icon={subRoute.icon} className={style.routeNameIcon}/>{ subRoute.displayedName }
                        </div>
                    </NavLink>
                ))}
            </nav>
        </div>
    )
}