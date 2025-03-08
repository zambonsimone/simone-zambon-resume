import React, { ComponentType, LazyExoticComponent } from "react";
import { IRoute } from "../../../routes/routes";
import { SubNavBar } from "../navigation/sub-nav-bar/SubNavBar";
import style from "./ContentHeader.module.scss";

interface IContentHeaderProps {
    Header: LazyExoticComponent<ComponentType>;
    subRoutes: IRoute[];
}
export const ContentHeader: React.FC<IContentHeaderProps> = ({
    Header,
    subRoutes
}) => {
    const showRouteHeader = !!Header;
    const showSubNavbar = !!subRoutes?.length;

    return (showRouteHeader || showSubNavbar) && (
        <div className={style.contentHeader} role="presentation">
            {showRouteHeader && <Header />}
            {showSubNavbar && <SubNavBar routes={subRoutes} />}
        </div>
    )
}