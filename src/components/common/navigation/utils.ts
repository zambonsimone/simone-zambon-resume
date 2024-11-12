import { NavLinkProps } from "react-router-dom";
import { RoutePath } from "../../../routes/paths";

type LinkMatch = Parameters<NonNullable<NavLinkProps["isActive"]>>[0];
export function isMainNavLinkActive(
    currentPath: RoutePath, 
    mainPath: RoutePath,
    match?: LinkMatch 
) {
    const isCurrentRouteParent = currentPath.startsWith(mainPath);
    return match != null || isCurrentRouteParent;
}