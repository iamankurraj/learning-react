import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl'>Coffee</h1>
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/242855/pexels-photo-242855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medi">
      Coffee isn’t just a drink—it’s an experience. As the evening sets in, the rich aroma of freshly brewed coffee fills the air, wrapping me in warmth and calm. That first sip is pure comfort, soothing yet awakening, as if the day’s stress melts away with each taste. 

      It’s not just about the caffeine; it’s the ritual—the slow pour, the rising steam, the quiet moment of reflection. Whether enjoyed alone or with a friend, coffee in the evening feels like a peaceful pause, a small joy that makes everything feel just a little better.
      </p>
    </blockquote>
    <figcaption>
      <div>
        Ankur 
      </div>
      <div>
        Noob Web Dev learner
      </div>
    </figcaption>
  </div>
</figure>
    </>
  )
}

export default App
