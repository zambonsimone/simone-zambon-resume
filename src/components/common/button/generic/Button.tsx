import { useEnterToClick } from "../../../../hooks/useEnterToClick/useEnterToClick";
import style from "./Button.module.scss";

interface IButtonBaseProps {
    text: string | JSX.Element;
    disabled?: boolean;
    dataTestId?: string;
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
    disabled,
    dataTestId
}) => {
    const triggerClick = useEnterToClick({ onClick });
    const id = `button-text-${Math.random().toString(16).slice(2)}`;

    return (
        <button
            onClick={onClick}
            type={submit ? "submit" : "button"}
            className={style.button}
            disabled={disabled}
            aria-disabled={disabled}
            onKeyDown={triggerClick}
            aria-labelledby={id}
            data-testid={dataTestId}
        >
            <span id={id}>{text}</span>
        </button>
    )
}