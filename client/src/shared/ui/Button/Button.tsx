import React, { ReactNode, FC, ButtonHTMLAttributes, memo } from 'react'
import cls from "./button.module.scss"

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    classNames?: string
}

const Button: FC<buttonProps> =  (props) =>  {
    const {children, disabled, classNames, ...otherProps } = props
  return (
    <button type='button' className={`${cls.button} ${classNames} ${disabled ? cls.disabled : ""}`} {...otherProps}  disabled={disabled}>{children}</button>
  )
}

export default memo(Button)
