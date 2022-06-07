import { useRouter } from "next/router";
import { useFormContext } from "../context/FormContext"

export default function FormPage() {

    const router = useRouter();

    const { setName } = useFormContext();

    const onSubmit = (event) => {
        event.preventDefault();
        router.push("/form-result");
    }

    const onChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder="Nome do usuário" name="name" onChange={onChange}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}