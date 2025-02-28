import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import { RoutePath } from "../../../../routes/paths";
import { IRoute, ROUTES } from "../../../../routes/routes";
import { Icon } from "../../icons/Icon";
import { isMainNavLinkActive } from "../utils";
import style from "./NavBar.module.scss";

type SubRoutesVisibilityState = Partial<Record<IRoute["name"], boolean>>;
const SUBROUTES_INITIAL_VISIBILITY_STATE: SubRoutesVisibilityState = {
    SKILLS: false,
    EXPERIENCES: false,
}

interface INavBarProps {
    collapsed?: boolean;
    onLinkClick?: () => void;
}
export const NavBar: React.FC<INavBarProps> = ({
    collapsed,
    onLinkClick
}) => {
    const location = useLocation();
    const pathname = location.pathname as RoutePath;
    const { t } = useTranslation("global");
    const [openedSubRoutesLists, setOpenedSubRoutesLists] = useState<SubRoutesVisibilityState>(SUBROUTES_INITIAL_VISIBILITY_STATE)

    const handleOnRouteClick = useCallback((
        route: IRoute,
        evt?: React.MouseEvent,
    ) => {
        if (!!route.subRoutes) {
            setOpenedSubRoutesLists(old => ({
                ...old,
                [route.name]: !old[route.name]
            }));
            evt?.preventDefault();
            return;
        }
        setOpenedSubRoutesLists({ ...SUBROUTES_INITIAL_VISIBILITY_STATE });
        onLinkClick?.();
    }, [onLinkClick]);

    const showSubRoutes = (route: IRoute) => openedSubRoutesLists[route.name];
    const navBarClassnames = [
        style.navbarContainer,
        collapsed ? style.collapsed : "",
    ]
    return (
        <div className={navBarClassnames.join(" ")}>
            <nav className={style.navbar}>
                {ROUTES.map((route, index) => !route.hideNavLink && (
                    <div className={style.mainNavLinkWrapper} key={index}>
                        <NavLink
                            key={route.name}
                            onClick={(evt: React.MouseEvent) => handleOnRouteClick(route, evt)}
                            className={style.mainNavLink}
                            activeClassName={style.mainNavLinkActive}
                            isActive={(match) => isMainNavLinkActive(pathname, route.path, match)}
                            to={route.path}
                            tabIndex={collapsed ? -1 : 0}
                            aria-label={t(route.displayedName)}
                            aria-current={pathname.includes(route.path) ? "page" : undefined}
                        >
                            <div className={style.routeName}>
                                <Icon className={style.icon} icon={route.icon} />
                                {!collapsed && t(route.displayedName)}
                                {!collapsed && !!route.subRoutes && (
                                    <Icon
                                        className={[style.icon, style.iconRouteCollapse].join(" ")}
                                        icon={showSubRoutes(route) ? "chevronUp" : "chevronDown"}
                                    />
                                )}
                            </div>
                        </NavLink>
                        {openedSubRoutesLists[route.name] && route.subRoutes?.map(subr => (
                            <NavLink
                                key={subr.name}
                                to={subr.path}
                                onClick={() => handleOnRouteClick(subr)}
                                className={[style.mainNavLink, style.mainSubNavLink].join(" ")}
                                aria-label={t(subr.displayedName)}
                            >
                                <div className={[style.routeName, style.subRouteName].join(" ")}>
                                    <Icon className={style.icon} icon={subr.icon} />{t(subr.displayedName)}
                                </div>
                            </NavLink>
                        ))}
                    </div>
                ))}
            </nav>
        </div>
    )
}