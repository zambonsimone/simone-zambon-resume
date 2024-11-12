export type InputType = "text" | "textarea" | "number" | "file";
export type InputMode = "numeric" | "tel" | "email";
export interface IInputProps {
    onChange: (value: string | FileList) => void;
    appendBefore: JSX.Element;
    inputMode?: InputMode;
    type: InputType;
}