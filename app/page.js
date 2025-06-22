import Header from "./components/Header";
import Hero from "./components/Hero";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.page}>
        <Hero />
      </main>
    </div>
  );
}
