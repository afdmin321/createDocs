import { FC, InputHTMLAttributes, memo, useEffect, useRef } from "react"
import cls from "./Input.module.scss"
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "readOnly">
interface inputProps extends HTMLInputProps {
    onChange: (value: string) => void;
    value?: string | number;
    autofocus?: boolean ;
    readonly?: boolean;
    className?: string;
 }
const Input: FC<inputProps> = (props) => {
    const {className, value, onChange, type, readonly, placeholder, autofocus, ...otherProps} = props
    const ref = useRef<HTMLInputElement>(null)
    useEffect(()=> {
        if (autofocus) {
            ref?.current?.focus()
        }
        
    },[autofocus])
    const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(evt.target.value)
    }
    return <div className={cls.inputWrapper}> 
        {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
        <input className={`${cls.input} ${className}`} ref={ref} readOnly={readonly} onChange={onChangeHandler}  value={value || ""} type={type} {...otherProps}/>
    </div>
}

export default memo(Input)