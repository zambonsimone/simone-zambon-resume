import { useEnterToClick } from "../../../../hooks/useEnterToClick/useEnterToClick";
import { Loading } from "../../loading/Loading";
import style from "./Button.module.scss";

interface IButtonBaseProps {
    text: string | JSX.Element;
    disabled?: boolean;
    dataTestId?: string;
    loading?: boolean;
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
    dataTestId,
    loading
}) => {
    const triggerClick = useEnterToClick({ onClick });
    const id = `button-text-${Math.random().toString(16).slice(2)}`;

    return (
        <button
            onClick={onClick}
            type={submit ? "submit" : "button"}
            className={style.button}
            disabled={disabled || loading}
            aria-disabled={disabled}
            onKeyDown={triggerClick}
            aria-labelledby={id}
            data-testid={dataTestId}
        >
            { loading 
                ? <Loading className={style.btnLoading}/> 
                : <span id={id}>{text}</span> 
            }
        </button>
    )
}