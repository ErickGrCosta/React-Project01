import { Header } from './components/headers';
import { Post } from './post';

import './styles.css'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Erick Garcia Costa"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam repudiandae, quis, sapiente facere fugit aut expedita nemo dicta molestias nesciunt veniam atque dolores? Voluptatem error odio natus perspiciatis ut!"
      />    
      <Post 
      author="Peters Parkers"
      content="Meu irmão!"
      />
      </div>
  )
}

