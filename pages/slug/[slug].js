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

export async function getStaticProps({ params }) {
    return {
      props: {
        slug: params.slug
      }
    }
  }

export async function getStaticPaths() {
    return {
      fallback: true,
      paths: []
    }
  }

// export async function getServerSideProps({ params }) {
//     return {
//         props: {
//             slug: params.slug
//         }, // will be passed to the page component as props
//     }
//   }