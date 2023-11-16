import { Header } from './components/headers';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ErickGrCosta.png',
      name: 'Erick Garcia Costa',
      role: 'Trainee @HCosta'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-11-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/kaicLimaOliveira.png',
      name: 'Kaic Lima Oliveira',
      role: 'Júnior @HCosta'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-11-09 08:00:00'),
  }
]

// <p>
//     <a className={styles.marginRight} href="">#novoprojeto</a>
//     <a className={styles.marginRight} href="">#nlw</a>
//     <a className={styles.marginRight} href="">#rocketseat</a>
// </p>

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

      </div>
  )
}

