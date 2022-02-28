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
      </div>
    </>
  );
}
