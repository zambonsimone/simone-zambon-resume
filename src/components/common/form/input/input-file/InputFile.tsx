import { useCallback, useRef, useState } from "react";
import { useEnterToClick } from "../../../../../hooks/useEnterToClick/useEnterToClick";
import inputStyle from "../Input.module.scss";
import { IInputProps } from "../types";
import inputFileStyle from "./InputFile.module.scss";

const ACCEPTED_FILE_TYPES = [".pdf", ".png", ".jpg", ".zip", ".jpeg"];

type IInputFileProps = IInputProps & Partial<HTMLInputElement>;
export const InputFile: React.FC<IInputFileProps> = ({
    onChange,
    placeholder,
    name,
    required
}) => {
    const [fileName, setFileName] = useState("");
    const inputFileRef = useRef<HTMLInputElement>(null);
    const triggerClick = useEnterToClick({ ref: inputFileRef.current })

    const onFileAttached = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (!files.length) return;
        onChange(files);
        setFileName(files[0].name);
    }, [onChange]);

    const onTriggerInputFileClick = useCallback(() => {
        inputFileRef.current.click();
    }, [])

    return (
        <div className={[inputStyle.inputWrapper, inputFileStyle.inputFileWrapper].join(" ")} role="presentation">
            <input
                id={name}
                name={name}
                type="file"
                className={inputFileStyle.inputFile}
                accept={ACCEPTED_FILE_TYPES.join(",")}
                onChange={onFileAttached}
                required={required}
                ref={inputFileRef}
                aria-required={required}
            />
            <input
                type="text"
                value={fileName}
                placeholder={placeholder}
                onClick={onTriggerInputFileClick}
                onKeyDown={triggerClick}
            />
        </div>
    )
}