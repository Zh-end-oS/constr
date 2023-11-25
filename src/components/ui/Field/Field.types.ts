import { ComponentType } from "react"
import { FieldError } from 'react-hook-form'
import { InputHTMLAttributes } from "react";

export interface IFieldProps {
    placeholder: string
    error?: FieldError
    Icon?: ComponentType
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps
