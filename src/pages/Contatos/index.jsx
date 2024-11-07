import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
            <section className={styles.contatos}>
                <h2>Contatos</h2>

                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre</p>

                <div className={styles.icones}>

                    <a href='mailto:nicollasgoias@hotmail.com' target='_blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icone} />
                    </a>

                    <a href='https://www.instagram.com/nicollasribluz/' target='_blank' rel='noopener noreferrer'>
                        <BsInstagram className={styles.icone} />
                    </a>

                    <a href='https://www.youtube.com/@n1coll4u7' target='_blank' rel='noopener noreferrer'>
                        <BsYoutube className={styles.icone} />
                    </a>

                    <a href='https://github.com/NicollasLuz' target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icone} />
                    </a>

                </div>
            </section>
        </>
    )
}

export default Contatos
