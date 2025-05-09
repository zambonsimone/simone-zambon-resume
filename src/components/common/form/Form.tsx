import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ObjectSchema, SchemaDescription } from "yup";
import { Button } from "../button/generic/Button";
import style from "./Form.module.scss";
import { FormField, IFormFieldProps } from "./FormField";

export type FormModel = { [key: string]: string | FileList | boolean };
type IFieldAsChildProps = Omit<IFormFieldProps, "errors" | "register" | "required" | "control">;
type ISubmitAsChildProps = { label: string, disabled: boolean, loading: boolean };

interface IFormProps {
    children: (
        Field: React.FC<IFieldAsChildProps>,
        SubmitBtn: React.FC<ISubmitAsChildProps>,
    ) => React.ReactNode;
    validationSchema: ObjectSchema<FormModel>;
    onSubmit: SubmitHandler<FormModel>;
    className?: string;
    title?: string;
    defaultValues: FormModel;
}
export const Form: React.FC<IFormProps> = ({
    children,
    validationSchema,
    className,
    onSubmit,
    title,
    defaultValues
}) => {
    const methods = useForm<FormModel>({
        resolver: yupResolver(validationSchema),
        mode: "onSubmit",
        defaultValues
    })
    const formRef = useRef<HTMLFormElement>();
    const { fields } = useMemo(() => validationSchema.describe(), [validationSchema]);

    const Field = useRef<React.FC<IFieldAsChildProps>>(({ name, ...others }) => {
        const fieldObj = fields[name] as SchemaDescription;
        const hasRequiredTest = fieldObj.tests.some(test => test.name === "required");
        const hasBooleanRequiredTest = fieldObj.type === "boolean" && fieldObj.oneOf.length === 1;
        return <FormField required={hasRequiredTest || hasBooleanRequiredTest} name={name} {...others} />
    });
    const SubmitBtn = useCallback<React.FC<ISubmitAsChildProps>>(({ label, disabled = false, loading = false }) => (
        <Button
            text={label}
            submit
            loading={loading}
            disabled={disabled}
            dataTestId={`${title ? title + "-" : ""}submit-btn`}
        />
    ), [title]);

    useEffect(() => {
        const errorEntries = Object.entries(methods.formState.errors);
        if (!errorEntries.length) return;
        const [field] = errorEntries[0];
        const fieldWithError = formRef.current.querySelector(`[name='${field}']`) as HTMLElement;
        formRef.current.scrollIntoView({ behavior: "smooth" });
        fieldWithError.focus()
    }, [methods.formState.errors])

    return (
        <FormProvider {...methods}>
            <form
                ref={formRef}
                onSubmit={methods.handleSubmit(onSubmit)}
                className={[style.form, className].join(" ")}
                noValidate
                aria-labelledby="form-title"
            >
                {title && <h2 style={{ display: "none" }} id="form-title">{title}</h2>}
                <div className={style.formFieldset} role="presentation">
                    {children(Field.current, SubmitBtn)}
                </div>
            </form>
        </FormProvider>
    )
}