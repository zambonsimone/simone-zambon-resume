import { AriaAttributes } from "react";
import { Noop } from "react-hook-form";

export type InputType = "text" | "textarea" | "number" | "file";
export type InputMode = "numeric" | "tel" | "email";
export interface IInputProps extends AriaAttributes {
    onChange: (value: string | FileList) => void;
    onBlur: Noop;
    appendBefore: JSX.Element;
    inputMode?: InputMode;
    type: InputType;
}