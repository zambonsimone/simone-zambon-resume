import inputStyle from "../Input.module.scss";
import { IInputProps } from "../types";

type ICheckboxProps = IInputProps & Partial<HTMLInputElement>

export const Checkbox: React.FC<ICheckboxProps> = ({
    name,
    required,
    checked,
    onBlur,
    onChange,
    ...other
}) => {
    return (
        <div className={inputStyle.inputWrapper} role="presentation">
            <input
                id={name}
                name={name}
                type={"checkbox"}
                required={required}
                checked={checked}
                aria-required={required}
                aria-describedby={other["aria-describedby"]}
                onBlur={onBlur}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => onChange(evt.target.checked)}
                className={inputStyle.checkbox}
            />
        </div>
    )
}