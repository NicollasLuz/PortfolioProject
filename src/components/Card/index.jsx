
import styles from './Card.module.css'
import { BsArrowRight } from 'react-icons/bs'


function Card({ title, description, icons }) {
    return (
        <section className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    {icons.map((Icon, index) => (
                        <Icon key={index} />
                    ))}
                </div>
                <button className={styles.botao}>
                    <BsArrowRight />
                </button>
            </div>
        </section>
    )
}

export default Card