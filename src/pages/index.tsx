import { FiArrowRight } from "react-icons/fi";
import { PageLanding } from "../styles/Landing.styled";
import style from "../styles/Landing.module.css";

export default function Home() {
  return (
    <PageLanding id={style.pageLanding}>
      <div className={style.contentWrapper}>
        <img src="static/images/logo.svg" alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className={style.location}>
          <strong>Goiás</strong>
          <span>Aparecida de Goiânia</span>
        </div>
        <a className={style.enterApp} href="">
          <FiArrowRight size="26" color="rgba(0, 0, 0,0.6)" />
        </a>
      </div>
    </PageLanding>
  );
}
