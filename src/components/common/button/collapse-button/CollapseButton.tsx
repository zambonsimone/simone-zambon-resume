import { useTranslation } from "react-i18next";
import { Icon } from "../../icons/Icon";
import style from "./CollapseButton.module.scss";

type CollapseIconNames = `chevronCircle${"Up" | "Down" | "Left" | "Right"}`;
type CollapseIconObject = Record<"collapsed" | "expanded", CollapseIconNames>;
type MappingPositionIconObject = Record<ICollapseButtonProps["collapsedTo"], CollapseIconObject>;

const MAPPING_POSITION_ICONS: MappingPositionIconObject = {
    top: { collapsed: "chevronCircleDown", expanded: "chevronCircleUp" },
    bottom: { collapsed: "chevronCircleUp", expanded: "chevronCircleDown" },
    right: { collapsed: "chevronCircleLeft", expanded: "chevronCircleRight" },
    left: { collapsed: "chevronCircleRight", expanded: "chevronCircleLeft" }
}

interface ICollapseButtonProps {
    collapsedTo: "top" | "bottom" | "right" | "left";
    collapsed: boolean;
    onClick?: () => void;
    className?: string;
}

export const CollapseButton: React.FC<ICollapseButtonProps> = ({
    collapsedTo,
    collapsed,
    onClick,
    className
}) => {
    const { t } = useTranslation("global");
    const icon: CollapseIconNames = MAPPING_POSITION_ICONS[collapsedTo][collapsed ? "collapsed" : "expanded"];
    return (
        <Icon
            aria-label={collapsed ? t("EXPAND") : t("COLLAPSE")}
            aria-expanded={!collapsed}
            className={[style.collapseBtn, className].join(" ")}
            icon={icon}
            onClick={onClick}
            button
        />
    )

}