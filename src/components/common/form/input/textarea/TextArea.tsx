import { useCallback } from "react";
import inputStyle from "../Input.module.scss";
import { IInputProps } from "../types";
import style from "./TextArea.module.scss";

type ITextAreaProps = IInputProps & Partial<HTMLTextAreaElement>;
export const TextArea: React.FC<ITextAreaProps> = ({
    name,
    onChange,
    placeholder,
    required,
}) => {

    const onTextareaChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    }, [onChange])

    return (
        <div className={inputStyle.inputWrapper} role="presentation">
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={onTextareaChange}
                required={required}
                aria-required={required}
                className={style.textarea}
            />
        </div>
    )
}