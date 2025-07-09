import React from 'react'

const Modal = ({ children, isOpen, onClose, title }) => {

    if (!isOpen) return null;

    return (
        <div className='fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc[100%-1rem]] max-h-full overflow-x-hidden overflow-y-auto bg-black/20 bg-opacity-50'>
            <div className="relative p-4 w-full max-w-2xl max-h-[100vh]">
                {/* modal contemt */}
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                            type='button' onClick={onClose}>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6 6 18"></path><path d="m6 6 12 12">
                            </path></svg>
                        </button>
                    </div>
                    {/* modal body */}
                    <div className="p-4 md:p-5 space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal