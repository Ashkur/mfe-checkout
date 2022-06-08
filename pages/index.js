import Link from 'next/link';

import { useRouter } from 'next/router';

import { useFormContext } from '../context/FormContext';

import styles from "../styles/Home.module.css";

import { Teste } from "@evob/evob.ui.teste/dist/teste";

export default function Home() {

  const router = useRouter()

  const { setName } = useFormContext()

  const onNavigate = () => {
    // if(process.env.NODE_ENV === 'production') {      
    //   router.push({
    //     protocol: 'https',
    //     hostname: 'checkout.nizen.com.br',
    //     pathname: '/slug/my-awsome-slug?param1=value1&param2=value2',
    //     query: {
    //       param1: 'value1',
    //       param2: 'value2'
    //     }
    //   })
    // }

    setName('Nizen')

    router.push({
      pathname: '/slug/my-awsome-slug',
      query: {
        param1: 'value1',
        param2: 'value2'
      }
    })    
  }

  return (
    <>
      <div className={styles.container}>
        <h1>MICRO-FRONTEND CHECKOUT</h1>
        <Teste>
          Hello World!
        </Teste>

        <p>
        <Link href="https://www.nizen.com.br">
                    <a>Home</a>
                </Link>
        </p>
        <p>
          <Link href="/no-slug-page">
            <a>Checkout without slug</a>
          </Link>
        </p>
        <p>
          <button onClick={onNavigate}>
            Checkout with slug
          </button>
        </p>
      </div>
    </>
  );
}
