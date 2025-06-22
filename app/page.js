import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductWrapper from "./components/ProductWrapper";
import styles from "./page.module.css";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <Hero />
        <ProductWrapper />
      </main>
      <Footer />
    </>
  );
}
