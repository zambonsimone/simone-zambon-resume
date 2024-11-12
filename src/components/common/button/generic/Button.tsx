import React from "react";
import style from "./Button.module.scss";

interface IButtonBaseProps {
    text: string | JSX.Element;
    disabled?: boolean;
}
type IButtonPropsWithOnClick = IButtonBaseProps & {
    onClick: () => void;
    submit?: boolean
};
type IButtonPropsWithSubmit = IButtonBaseProps & {
    onClick?: () => void;
    submit: true;
};

export const Button: React.FC<IButtonPropsWithOnClick | IButtonPropsWithSubmit> = ({
    text,
    onClick,
    submit,
    disabled
}) => {
    return (
        <button 
            onClick={onClick} 
            type={submit ? "submit" : "button"} 
            className={style.button}
            disabled={disabled}
            //aria-disabled
        >
            <span>{text}</span>
        </button>
    )
}