import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ratione ullam sequi vel nostrum, omnis necessitatibus eligendi provident odit excepturi ipsa alias iste quam quae molestias ut corrupti aliquid delectus repudiandae impedit dignissimos neque quibusdam possimus maiores! Nesciunt, doloribus! Laborum ratione debitis eligendi voluptas. Distinctio ratione totam consequatur inventore illo.
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in doloremque, eius culpa quasi assumenda quam atque asperiores voluptatem optio accusantium sunt veniam iure? Provident ipsum ipsa, neque et dolorem eos! Assumenda laborum voluptatum dolorem nisi beatae sunt eligendi aut, labore commodi delectus. Aliquid architecto fuga excepturi asperiores recusandae nihil.
                </p>
            </div>
        </div>
    )
}

export default About