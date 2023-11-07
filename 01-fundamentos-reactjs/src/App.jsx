import { Header } from './components/headers';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Erick Garcia Costa"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam repudiandae, quis, sapiente facere fugit aut expedita nemo dicta molestias nesciunt veniam atque dolores? Voluptatem error odio natus perspiciatis ut!"
          />    
          <Post 
            author="Peters Parkers"
            content="Meu irmão!"
          />
        </main>
      </div>

      </div>
  )
}

