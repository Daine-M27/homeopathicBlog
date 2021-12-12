import React, { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services';

const CommentsForm = ( {slug} ) => {
    const [error, setError] = useState(false);
    const [localStorage, setLocalStorage] = useState(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl = useRef();
    const nameEl = useRef();
    const emailEl = useRef();
    const storeDataEl = useRef();

    useEffect(() => {
       nameEl.current.value = window.localStorage.getItem('name')
       emailEl.current.value = window.localStorage.getItem('email')
    }, [])

    const handleCommentSubmission = () => {
        setError(false)
        
        const {value: comment} = commentEl.current;
        const {value: name} = nameEl.current;
        const {value: email} = emailEl.current;
        const {checked: storeData} = storeDataEl.current;
        
        if(!comment || !name || !email) {
            setError(true)
            return;
        }

        const commentObj = { name, email, comment, slug }

        if(storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)            
        } else {
            window.localStorage.removeItem('name', name)
            window.localStorage.removeItem('email', email)
        }

        submitComment(commentObj).then((res) => { 
            setShowSuccessMessage(true)
            setTimeout(() => {
                setShowSuccessMessage(false)
            }, 4000)
        })
    }
    
    return (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4' >Leave a Comment</h3 >
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea 
                    ref={commentEl} 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
                    placeholder='Comment'
                    name='Comment'
                />    
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <input 
                    type='text' ref={nameEl}
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700' 
                    placeholder='Name'
                    name='name'
                />            
                <input 
                    type='text' ref={emailEl}
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700' 
                    placeholder='Email Address'
                    name='email'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <div>
                    <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true' />
                    <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Save name an email for next my next comment.</label>
                </div>
            </div>
            {error && <p className='text-lg text-red-600'>All fields are required!</p>}
            {showSuccessMessage && <span className='text-lg text-green-500'>Comment submitted for approval</span>}
            <div className='mt-8 '>
                <button 
                type='button' 
                onClick={handleCommentSubmission}
                className='transition duration-600 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
                >
                Post Comment
                </button>
            </div>
        </div>
    )
}

export default CommentsForm
