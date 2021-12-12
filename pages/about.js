import React from "react"

export default function About() {
    return (
        <div className="container mx-auto px-10 mb-8">
            {/* main body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
                        {/* page image */}
                        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                            <img
                                src='./aboutMain.jpg'
                                alt='Image here'
                                className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
                            />
                        </div>
                        {/* Page Title */}
                        <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
                            About Site
                        </h1>
                        
                        {/* main body text */}
                        <h3 className='text-center text-xl font-bold text-gray-700 px-4 lg:px-20 mb-8'>1. What value do you give your readers?</h3>
                        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>This one is a biggie, which is why I’m sharing it first. #seewhatididthere? Your About Me Page should be ALL about the value you give to your readers. Yes, people want to learn about you (we’ll get into that, too), but they also want to know how YOU are going to help THEM. So, before you start writing your About Page, get clear on what it is that makes your blog useful to your readers and who your blog is intended for. (Hey, I’ve got a free worksheet at the bottom of this post, to help you answer this question!)</p>

                        <h3 className='text-center text-xl font-bold text-gray-700 px-4 lg:px-20 mb-8'>1. What value do you give your readers?</h3>
                        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>This one is a biggie, which is why I’m sharing it first. #seewhatididthere? Your About Me Page should be ALL about the value you give to your readers. Yes, people want to learn about you (we’ll get into that, too), but they also want to know how YOU are going to help THEM. So, before you start writing your About Page, get clear on what it is that makes your blog useful to your readers and who your blog is intended for. (Hey, I’ve got a free worksheet at the bottom of this post, to help you answer this question!)</p>

                        <h3 className='text-center text-xl font-bold text-gray-700 px-4 lg:px-20 mb-8'>1. What value do you give your readers?</h3>
                        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>This one is a biggie, which is why I’m sharing it first. #seewhatididthere? Your About Me Page should be ALL about the value you give to your readers. Yes, people want to learn about you (we’ll get into that, too), but they also want to know how YOU are going to help THEM. So, before you start writing your About Page, get clear on what it is that makes your blog useful to your readers and who your blog is intended for. (Hey, I’ve got a free worksheet at the bottom of this post, to help you answer this question!)</p>

                        <h3 className='text-center text-xl font-bold text-gray-700 px-4 lg:px-20 mb-8'>1. What value do you give your readers?</h3>
                        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>This one is a biggie, which is why I’m sharing it first. #seewhatididthere? Your About Me Page should be ALL about the value you give to your readers. Yes, people want to learn about you (we’ll get into that, too), but they also want to know how YOU are going to help THEM. So, before you start writing your About Page, get clear on what it is that makes your blog useful to your readers and who your blog is intended for. (Hey, I’ve got a free worksheet at the bottom of this post, to help you answer this question!)</p>

                        <h3 className='text-center text-xl font-bold text-gray-700 px-4 lg:px-20 mb-8'>1. What value do you give your readers?</h3>
                        <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>This one is a biggie, which is why I’m sharing it first. #seewhatididthere? Your About Me Page should be ALL about the value you give to your readers. Yes, people want to learn about you (we’ll get into that, too), but they also want to know how YOU are going to help THEM. So, before you start writing your About Page, get clear on what it is that makes your blog useful to your readers and who your blog is intended for. (Hey, I’ve got a free worksheet at the bottom of this post, to help you answer this question!)</p>

                    </div>

                </div>

                {/* righ side bar */}
                <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">

                        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
                            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>About Me</h3>

                            <div className='flex items-center w-full mb-4'>
                                <div className='w-16 flex-none'>
                                    <img
                                        alt='bioPic'
                                        height='100px'
                                        width='100px'
                                        className='align-middle rounded-full'
                                        src='bioPic.jpg'
                                    />
                                </div>
                                <div className='flex-grow ml-4'>
                                    <p className='text-gray-500 font-xs'>
                                       Some more text small
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}