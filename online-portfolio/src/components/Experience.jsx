import React from 'react'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css.png'
import githubIcon from '../assets/github.png'
import graphqlIcon from '../assets/graphql.png'
import javascriptIcon from '../assets/javascript.png'
import nextjsIcon from '../assets/nextjs.png'
import reactIcon from '../assets/react.png'
import tailwindIcon from '../assets/tailwind.png'
import nodeIcon from '../assets/node.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: htmlIcon,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: cssIcon,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascriptIcon,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactIcon,
            title: 'React',
            style: 'shadow-blue-300'
        },
        {
            id: 5,
            src: tailwindIcon,
            title: 'Tailwind CSS',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjsIcon,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: graphqlIcon,
            title: 'GraphQL',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: githubIcon,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 9,
            src: nodeIcon,
            title: 'Node',
            style: 'shadow-green-600'
        }
    ]

    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            <p className='pt-4'>{title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Experience