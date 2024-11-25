import { AriaAttributes, useCallback, useRef } from "react";
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
    const iconRef = useRef<HTMLDivElement>(null)
    const triggerClick = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") iconRef.current.click();
    },[])
    return (
        <div
            className={[style.icon, className].join(" ")} 
            onClick={onClick} 
            tabIndex={onClick ? 0 : -1}
            onKeyDown={triggerClick}
            ref={iconRef}
            role={button ? "button" : undefined}
            {...ariaAttributes}
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={"1em"} 
                height={"1em"}
                viewBox="0 0 24 24" 
                fill="currentColor"
            >
                {ICONS_PATHS[icon]}
            </svg>
        </div>
    )
}