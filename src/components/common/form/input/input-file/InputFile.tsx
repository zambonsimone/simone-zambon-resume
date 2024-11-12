import React, { useCallback, useRef, useState } from "react";
import inputStyle from "../Input.module.scss";
import { IInputProps } from "../types";
import inputFileStyle from "./InputFile.module.scss";

const ACCEPTED_FILE_TYPES = [".pdf",".png",".jpg",".zip",".jpeg"];

type IInputFileProps = IInputProps & Partial<HTMLInputElement>;
export const InputFile: React.FC<IInputFileProps> = ({
    onChange,
    placeholder,
    name,
    required
}) => {
    const [fileName, setFileName] = useState("");
    const inputFileRef = useRef<HTMLInputElement>(null);

    const onFileAttached = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.currentTarget.files;
        if (!files.length) return;
        onChange(files);
        setFileName(files[0].name);
    },[onChange]);

    const onTriggerInputFileClick = useCallback(() => {
        inputFileRef.current.click();
    },[])
    const triggerClick = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") { 
            inputFileRef.current.click();
            event.preventDefault();
        }
    },[])

    return (
        <div className={[inputStyle.inputWrapper, inputFileStyle.inputFileWrapper].join(" ")}>
            <input 
                id={name} 
                name={name} 
                type="file" 
                className={inputFileStyle.inputFile} 
                accept={ACCEPTED_FILE_TYPES.join(",")}
                onChange={onFileAttached}
                required={required}
                ref={inputFileRef}
                //TODO: aria-required
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