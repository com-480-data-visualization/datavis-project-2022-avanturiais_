
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>

      <header className={styles.title}>
         <h1>LOG RETURNS Analysis</h1> 
      </header>


      {
        [ "ekekke",
          "mdmdmdmdm",
          "mdmdmdm",
          "msmwm"
        ].map(el => {return <div className={styles.ctn}>{el}</div>})
      }
      

      



    </div>
  )
}