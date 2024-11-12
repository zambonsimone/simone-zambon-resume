import React, { useCallback } from "react";
import inputStyle from "../Input.module.scss";
import { IInputProps } from "../types";
import inputTextStyle from "./InputText.module.scss";

type IInputTextProps = IInputProps & Partial<HTMLInputElement>;
export const InputText: React.FC<IInputTextProps> = ({
    name,
    placeholder,
    onChange,
    appendBefore,
    required,
    maxLength,
    value,
    inputMode,
    type
}) => {
    const internalOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value.slice(0,maxLength);
        onChange(text);
    },[maxLength, onChange])

    return (
        <div className={inputStyle.inputWrapper}>
            { appendBefore && (
                <div className={inputTextStyle.beforeInputValue}>
                    { appendBefore }
                </div>
            )}
            <input 
                id={name} 
                name={name}
                type={type}
                inputMode={inputMode} 
                placeholder={placeholder} 
                onChange={internalOnChange}
                required={required}
                maxLength={maxLength}
                value={value}
                //TODO: aria-required
            />
        </div>
    )
}