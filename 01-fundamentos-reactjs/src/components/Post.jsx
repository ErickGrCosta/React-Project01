import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post} >
            <header className={styles.header}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/ErickGrCosta.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Erick Garcia Costa</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time className={styles.headerTime} title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">👉 jane.design/doctorcare</a></p>
                <p>
                    <a className={styles.marginRight} href="">#novoprojeto</a>
                    <a className={styles.marginRight} href="">#nlw</a>
                    <a className={styles.marginRight} href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm} action="">
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}