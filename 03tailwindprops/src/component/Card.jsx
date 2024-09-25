import React from 'react'

function Card({username,work="dev"}) {
    // this is destructuring instead of using props we use {braces}
    //also the default parameter if its not passed as props
    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/242855/pexels-photo-242855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
                <div class="pt-6 space-y-4">
                    <blockquote>
                    <p className="text-lg font-medi">
                    Coffee isn’t just a drink—it’s an experience. As the evening sets in, the rich aroma of freshly brewed coffee fills the air, wrapping me in warmth and calm. That first sip is pure comfort, soothing yet awakening, as if the day’s stress melts away with each taste. 
            
                    It’s not just about the caffeine; it’s the ritual—the slow pour, the rising steam, the quiet moment of reflection. Whether enjoyed alone or with a friend, coffee in the evening feels like a peaceful pause, a small joy that makes everything feel just a little better.
                    </p>
          </blockquote>
          <figcaption>
            <div>
              {/* {props.username}  */}
              {username}
            </div>
            <div>
              {/* {props.work} */}
            {work}
            </div>
          </figcaption>
        </div>
      </figure>
        </>
        
    )
}

export default Card
