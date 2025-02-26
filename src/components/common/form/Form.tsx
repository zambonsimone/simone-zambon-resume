import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ObjectSchema, SchemaDescription } from "yup";
import { Button } from "../button/generic/Button";
import { Loading } from "../loading/Loading";
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
}
export const Form: React.FC<IFormProps> = ({
    children,
    validationSchema,
    className,
    onSubmit,
}) => {
    const methods = useForm<FormModel>({
        resolver: yupResolver(validationSchema),
        mode: "onSubmit",
    })
    const formRef = useRef<HTMLFormElement>();
    const { fields } = useMemo(() => validationSchema.describe(), [validationSchema]);

    const Field = useRef<React.FC<IFieldAsChildProps>>(({ name, ...others }) => {
        const isRequired = (fields[name] as SchemaDescription).tests.some(test => test.name === "required");
        return <FormField required={isRequired} name={name} {...others} />
    });
    const SubmitBtn = useCallback<React.FC<ISubmitAsChildProps>>(({ label, disabled = false, loading = false }) => (
        <Button
            text={loading ? <Loading className={style.submitLoading} /> : label}
            submit
            disabled={loading || disabled}
        />
    ), []);

    useEffect(() => {
        const errorEntries = Object.entries(methods.formState.errors);
        if (!errorEntries.length) return;
        formRef.current.scrollIntoView({ behavior: "smooth" });
    }, [methods.formState.errors])

    return (
        <FormProvider {...methods}>
            <form
                ref={formRef}
                onSubmit={methods.handleSubmit(onSubmit)}
                className={[style.form, className].join(" ")}
                noValidate
            >
                <fieldset className={style.formFieldset}>
                    {children(Field.current, SubmitBtn)}
                </fieldset>
            </form>
        </FormProvider>
    )
}