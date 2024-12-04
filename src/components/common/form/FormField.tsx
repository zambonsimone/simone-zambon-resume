import { Controller, useFormContext } from "react-hook-form";
import { Asterisk } from "../../symbols/Symbols";
import { Icon } from "../icons/Icon";
import style from "./Form.module.scss";
import { InputFile } from "./input/input-file/InputFile";
import { InputText } from "./input/input-text/InputText";
import { TextArea } from "./input/textarea/TextArea";
import { InputMode, InputType } from "./input/types";

const INPUT_MAPPING = {
    text: InputText,
    number: InputText,
    textarea: TextArea,
    file: InputFile
}

export interface IFormFieldProps {
    name: string;
    type: InputType;
    label: string | JSX.Element;
    placeholder?: string;
    onChange?: (newValue: string | FileList | boolean) => void;
    required: boolean;
    className?: string;
    appendBefore?: JSX.Element;
    maxlength?: number;
    inputMode?: InputMode;
}
export const FormField: React.FC<IFormFieldProps> = (({
    type,
    name,
    label,
    placeholder,
    onChange: onChangeProp,
    required,
    className = "",
    appendBefore,
    maxlength,
    inputMode
}) => {
    const { 
        formState: { errors }, 
        control
    } = useFormContext();

    const errorMsg = errors[name]?.message as string;

    return (
        <div className={[style.fieldContainer, className].join(" ")}>
            <label className={style.fieldLabel} htmlFor={name}>
                { label }{ required ? <Asterisk/> : "" }
            </label>
            <div className={style.field}>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required }}
                    render={({ field: { onChange, value, onBlur } }) => {
                        const Component = INPUT_MAPPING[type];
                        return (
                            <Component
                                name={name}
                                placeholder={placeholder} 
                                onChange={(value: string | FileList) => {
                                    onChangeProp?.(value)
                                    onChange(value);
                                }}
                                onBlur={onBlur}
                                appendBefore={appendBefore} 
                                required={required}
                                type={type}
                                inputMode={inputMode}
                                maxLength={maxlength}
                                value={value}
                                aria-describedby={`${name}-field-error`}
                                aria-invalid={!!errorMsg}
                            />
                        )
                    }}
                />      
                { !!errorMsg && (
                    <span id={`${name}-field-error`} className={style.fieldError}>
                        <Icon className={style.errorIcon} icon={"alert"}/>{errorMsg}
                    </span>
                )}
            </div>  
        </div>
    )
});

FormField.displayName = "FormField";

