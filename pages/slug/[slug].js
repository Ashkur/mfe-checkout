import Link from 'next/link';
import { useFormContext } from '../../context/FormContext';

export default function SlugPage ({ slug }) {
    const { name } = useFormContext()

    return (
        <div>
            <h1>This is da page with slug: <b>{slug}</b></h1>
            <p>name: {name}</p>
            <p>
                <Link href="https://www.nizen.com.br">
                    <a>Home</a>
                </Link>
            </p>
            <p>
                <Link href="/">
                    <a>Checkout index</a>
                </Link>
            </p>
            <p>
                <Link href="/no-slug-page">
                    <a>Checkout without slug</a>
                </Link>
            </p>
        </div>
    )
}

export async function getServerSideProps({ req, params }) {
    if(process.env.NODE_ENV === 'production'){
        // req.headers.host = 'checkout.nizen.com.br'
        // req.headers.referer = 'checkout.nizen.com.br'
    }

    // console.log(req.__NEXT_INIT_URL)

    return {
        props: {
            slug: params.slug
        }, // will be passed to the page component as props
    }
  }