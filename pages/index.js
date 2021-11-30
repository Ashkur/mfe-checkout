import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card } from "@ashkur/teste.ui.card";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>MICRO-FRONTEND CHECKOUT</h1>
      <Card
        title="SHARED CARD"
        description="Card shared with bit component same used on Home MFE"
        imageUrl="https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1561&q=80"
      />
    </div>
  );
}
