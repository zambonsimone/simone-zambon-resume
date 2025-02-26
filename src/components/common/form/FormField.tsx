import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Asterisk } from "../../symbols/Symbols";
import { Icon } from "../icons/Icon";
import style from "./Form.module.scss";
import { Checkbox } from "./input/checkbox/Checkbox";
import { InputFile } from "./input/input-file/InputFile";
import { InputText } from "./input/input-text/InputText";
import { TextArea } from "./input/textarea/TextArea";
import { InputMode, InputType } from "./input/types";

const INPUT_MAPPING = {
    text: InputText,
    number: InputText,
    textarea: TextArea,
    file: InputFile,
    checkbox: Checkbox
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
    const { t } = useTranslation("contacts");

    const errorMsg = errors[name]?.message as string;
    const isCheckbox = type === "checkbox";
    const labelElement = (
        <label className={style.fieldLabel} htmlFor={name}>
            {label}{required ? <Asterisk /> : ""}
        </label>
    )

    return (
        <div className={[style.fieldContainer, className].join(" ")}>
            <div className={[
                style.fieldWrapper,
                isCheckbox ? style.checkboxWrapper : "",
                !!errorMsg ? style.error : ""
            ].join(" ")}>
                {labelElement}
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
                                    onChange={(value: string | FileList | boolean) => {
                                        onChangeProp?.(value)
                                        onChange(value);
                                    }}
                                    onBlur={onBlur}
                                    checked={value}
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
                </div>
            </div>
            {!!errorMsg && (
                <span id={`${name}-field-error`} className={style.fieldError}>
                    <Icon className={style.errorIcon} icon={"alert"} />{t(errorMsg)}
                </span>
            )}
        </div>
    )
});

FormField.displayName = "FormField";

