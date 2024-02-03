import { useState } from 'react'

export const useForm = <T>(initalValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [field, setField] = useState<T>(initalValue)
    return [field, setField]
}

export const useFormWithError = <T>(initalValue: T): [T, React.Dispatch<React.SetStateAction<T>>, boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
    const [field, setField] = useForm<T>(initalValue)
    const [error, setError] = useState<boolean>(false)
    return [field, setField, error, setError]
}

export const useFormWithHelper = <T>(initalValue: T): [T, React.Dispatch<React.SetStateAction<T>>, string, React.Dispatch<React.SetStateAction<string>>] => {
    const [field, setField] = useForm<T>(initalValue)
    const [helper, setHelper] = useState<string>('')
    return [field, setField, helper, setHelper]
}

export const useFormWithErrorAndHelper = <T>(initalValue: T): [T, React.Dispatch<React.SetStateAction<T>>, boolean, React.Dispatch<React.SetStateAction<boolean>>, string, React.Dispatch<React.SetStateAction<string>>] => {
    const [field, setField, error, setError] = useFormWithError<T>(initalValue)
    const [helper, setHelper] = useState<string>('')
    return [field, setField, error, setError, helper, setHelper]
}