import styles from '../styles/containers.module.css';

import TeamPlaatje from '../public/plaatjes/team.svg';
import AccessibilityPlaatje from '../public/plaatjes/accessibility.svg';
import DevelopmentPlaatje from '../public/plaatjes/development.svg';
import { Navigatie } from '../components/navigatie';
import { Footer } from '../components/footer';
import { Main } from 'next/dist/pages/_document';
import { Projectkaart } from '../components/projectkaart';
import { Verhaalkaart } from '../components/verhaalkaart';

export default () => {
  return (
    <>
      <Navigatie />
      <main className={styles.container}>
        <h1>Hallo! Ik ben Kayleigh en dit is een website.</h1>
        <section className={styles.cardContainer}>
          {/* <Projectkaart
            titel="Lely Nederland"
            beschrijving="Project"
            Plaatje={AccessibilityPlaatje}
            paginaUrl="/projecten/Lely"
          />
          <Projectkaart
            titel="Team Humanoids"
            beschrijving="Personeel"
            Plaatje={TeamPlaatje}
          />
          <Projectkaart
            titel="Development"
            beschrijving="HTML, CSS en Javascript"
            Plaatje={DevelopmentPlaatje}
          /> */}
          <Verhaalkaart>
            <h2> Isometric City </h2>
            <p> Meer over Isometrisch illustreren </p>
            <img src="https://i.postimg.cc/HsQZWmL1/New-York-300x-8.png" />
          </Verhaalkaart>
        </section>
      </main>
      <Footer />
    </>
  );
};
