import Link from 'next/link';

import styles from "../styles/Home.module.css";

import { Teste } from "@evob/evob.ui.teste/dist/teste";

export default function Home() {
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
          <Link href="/slug/my-awsome-slug">
            <a>Checkout with slug</a>
          </Link>
        </p>
      </div>
    </>
  );
}
