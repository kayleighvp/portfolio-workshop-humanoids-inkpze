import { Footer } from '../../components/footer';
import { Navigatie } from '../../components/navigatie';
import styles from '../../styles/containers.module.css';

export default () => {
  return (
    <>
      <Navigatie />

      <main className={styles.container}>
        <h1> Lely Nederland </h1>
        <p> Welkom bij dit project.</p>
        <h2> Het proces </h2>
        <p> Tijdens het project hebben we ... </p>
        <Footer />
      </main>
    </>
  );
};
