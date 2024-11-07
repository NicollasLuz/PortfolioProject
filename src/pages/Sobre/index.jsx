
import styles from './Sobre.module.css'
import avatar from './images/avatar.jpeg'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'
import Container from '../../components/Container'

    
function Sobre() {
    return (
        <Container>
            <section className={styles.sobre}>
                
                <div className={styles.bio}>
                    <img src={avatar} alt="Avatar" className={styles.avatar} />
                    <div className={styles.textos}>
                        <h2>Sobre</h2>

                        <p>Sou <span>Nicollas Luz</span> <br />
                        <strong>Dev Junior</strong> </p>

                        <p>Trabalho e estudo com programação desde 2023.</p>

                        <p>Sou apaixonado por transformar ideias em realidade.</p>

                        <p>Tenho 1 ano de experiencia com programação em uma equipe de robótica de FRC, Fisrt Robotics Competition.</p>
                    </div>
                </div>

                <div className={styles.techs}>
                    <h3>Techs</h3>
                    <div className={styles.icones}>
                        <img src={html} alt="Ícone do html" />
                        <img src={css} alt="Ícone do css" />
                        <img src={js} alt="Ícone do js" />
                        <img src={react} alt="Ícone do react" />
                        <img src={node} alt="Ícone do node" />
                        <img src={sql} alt="Ícone do sql" />
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Sobre

