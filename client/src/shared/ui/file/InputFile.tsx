import { FC, InputHTMLAttributes, ReactNode, memo, useId, useMemo, useRef } from "react"
import cls from "./InputFile.module.scss"
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "multiple">
interface inputProps extends HTMLInputProps {
    onChange: (value: FileList | null) => void;
    file: any;
    placeholder: string;
    className?: string;
    multiple?: boolean;

}
const InputFile: FC<inputProps> = (props) => {
    const { className, file, onChange, placeholder, ...otherProps } = props
    const inpitFile: any = useRef(null)

    
    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const files = evt.target.files
        onChange?.(files)

    }

    if (inpitFile.current && !file) {
        inpitFile.current.value = file
    }

    const idInput = useId()
    return <div className={cls.fileWrapper}>
        <label htmlFor={idInput} className={cls.placeholder}>{placeholder}</label>
        <input ref={inpitFile} id={idInput} className={`${cls.file} ${className}`} onChange={onChangeHandler} type="file" {...otherProps} />
        {file && <div className={cls.done}>&#128504;</div>}
    </div>
}

export default memo(InputFile)