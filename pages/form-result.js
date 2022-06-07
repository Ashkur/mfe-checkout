import { useFormContext } from "../context/FormContext"

export default function FormResult() {
    const { name } = useFormContext();

    return (
        <h1>Form result: {name}</h1>
    )
}