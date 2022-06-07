import Link from 'next/link';

import { useRouter } from 'next/router';

import styles from "../styles/Home.module.css";

import { Teste } from "@evob/evob.ui.teste/dist/teste";

export default function Home() {

  const router = useRouter()

  const onNavigate = () => {
    router.push({
      hostname: 'https://checkout.nizen.com.br',
      path: '/slug/my-awsome-slug'
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
