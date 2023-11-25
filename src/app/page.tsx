import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Melhore o Designer do seu Produto Digital.</h1>
        <p className={styles.desc}>
          Tornando Ideias em Realidade. We bring together the teams from the global tech industry.
        </p>
        <button className={styles.button}>
          Conheça meu Trabalho
        </button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt={''} className={styles.img} />
      </div>
    </div>
  )
}
