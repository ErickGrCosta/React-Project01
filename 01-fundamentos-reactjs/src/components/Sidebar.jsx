import { PencilLine } from 'phosphor-react'
 
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://img.freepik.com/fotos-gratis/computador-laptop-cinza-ligado_400718-47.jpg?w=500&t=st=1698839271~exp=1698839871~hmac=aafac13f944fe4c42ac5ed0234da6edb75d5f8dcafb1ee3fc93f4927a7961756"
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/ErickGrCosta.png"/>

                <strong>Erick Garcia Costa</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}