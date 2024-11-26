import React from 'react';
import Heading from './Heading';
import Card from './Card'
    const data = [
        
        {
        id: 0,
        title: "Simple Cli Calculator",
        img: "/project1 Simple Cli Calculator.jpg",
        tags: ["React" , "Node" , "CSS" , "Typescript"]
   
    },
{
    id: 1,
    title: "Number Guessing Game",
    img: "/Project 2 Number guessing game.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 3,
    title: "Todos App",
    img:"/Project 4 Todos App.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 4,
    title: "Currency Converter",
    img: "/Project 5 Currency Converter.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 5,
    title: "Word Counter",
    img: "/Project 6 Word Counter.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 6,
    title: "Student Management System ",
    img: "/Project 7 Student Management System.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 7,
    title: "CountDown Timer",
    img: "/Project 8 Coundown Timer.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 8,
    title: "Object Oriented Programming",
    img: "/Project 9 Object Oriented Programming.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 9,
    title: "Object Oriented Programming My bank",
    img: "/Project 10 Object Oriented Programming My Bank.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 10,
    title: "Hakhton Static resume builder",
    img: "/Project 11 Hakhton Static Resume Builder.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 11,
    title: "Hakhton Dynamic Resume Builder",
    img: "/project 12 Hakhton Dynamic Resume Builder.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 12,
    title: "Hakhton Editable resume builder",
    img: "/Project 13 Hakhton Editable Resume Builder.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"],
},
{
    id: 13,
    title: "Hakhton Unique Path and Shareable Link",
    img: "/Project 14  Hakhton Unique Path and Shareable Link.jpg",
    tags: ["React" , "Node" , "CSS" , "Typescript"]
},
    ]
const projects = () => {
  return (
    <div id='Projects' className='container pt-32'>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default projects

