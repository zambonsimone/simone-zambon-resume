import { AriaAttributes } from "react";
import { useEnterToClick } from "../../../hooks/useEnterToClick/useEnterToClick";
import style from "./Icon.module.scss";
import { IconName, ICONS_PATHS } from "./icons-paths";

interface IIconProps extends AriaAttributes {
    className?: string;
    icon: IconName;
    onClick?: () => void;
    button?: boolean;
}
export const Icon: React.FC<IIconProps> = ({
    className = "",
    icon,
    onClick,
    button,
    ...ariaAttributes
}) => {
    const triggerClick = useEnterToClick({ onClick })

    return (
        <div
            className={[style.icon, className].join(" ")}
            onClick={onClick}
            tabIndex={onClick ? 0 : -1}
            onKeyDown={triggerClick}
            role={button ? "button" : undefined}
            aria-hidden={!button}
            {...ariaAttributes}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={"1em"}
                height={"1em"}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
            >
                {ICONS_PATHS[icon]}
            </svg>
        </div>
    )
}