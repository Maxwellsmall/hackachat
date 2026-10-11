import React from 'react'
import Card from "@/components/landing/card"

const CardProps = [

  {
    id: 1,
    title: "Pinpoints bugs without hand-waving",
    subtitle: `Paste Terminal logs, cryptic compliers, or CSS flexbox disaster.
              Hackachat steps through the execution stacks points out exact lines
              where state went out of sync, and gives syntax-highlighted solutions.
    `,
    headText: "Real Code Understanding",
    footerText: "come here now",
    size: "large"
  },
  {
    id: 2,
    title: "Hint before answers",
    subtitle: `Paste Terminal logs, cryptic compliers, or CSS flexbox disaster.
              Hackachat steps`,
    headText: "PEDAGOGY FIRST",
    footerText: "come here now",
    size: "normal"
  },
  {
    id: 3,
    title: "A lady is here",
    subtitle: "parargraph",
    headText: "hello world",
    footerText: "come here now",
    size: "normal"

  },
   {
    id: 4,
    title: "A lady is here",
    subtitle: "parargraph",
    headText: "hello world",
    footerText: "come here now",
    size: "large"
    
  }
]


const Built = () => {
  return (
    <div className='w-full px-5'>
        <div className='py-10'>
          <h1 className='font-semibold text-[35px]'>A peer at the next desk, not a corporate <br />
          bot.
          </h1>
          <p className='text-zinc-500 text-[15px]'>Most chatbots either blurt out homeworks answer(so you fail the test later) or talk down <br />
           to you. Hackachat is tuned for learning by building. 
           </p> 

           <div className='grid grid-cols-2 my-10 items-center justify-center gap-5 w-full'>
            {CardProps.map((card) => (
                  <Card 
                  key={card.id}
                   title={card.title} 
                   subtitle={card.subtitle} 
                   headText={card.headText} 
                   footerText={card.footerText}/>
            ))}
           </div>

        </div>
    </div>
  )
}

export default Built