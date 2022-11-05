import React, {useEffect, useRef, useState} from 'react'

const Quickback = ({url}) => {
    const [quicking, setQuicking] = useState(false)
    const [sended, setSended] = useState(false)

    const textareaRef = useRef()

    const handleSubmit = async event => {
        event.preventDefault()
        setQuicking(true)
        const quickback_text = textareaRef.current.value

        await fetch(`${url}`, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                quickback_text
            })
        })

        textareaRef.current.value = ""
        setQuicking(false)
        setSended(true)
        setTimeout(setSended(false), 5000)
    }


    return <form onSubmit={handleSubmit} id="quickback-wrapper-id-system" className="absolute bottom-8 right-8 flex flex-col rounded-lg border bg-white dark:bg-zinc-800">
            <textarea ref={textareaRef} name="feedly_text" placeholder="Quickback ?" rows="3" minLength="3" className="quick-area peer h-12 w-64 resize-none border-0 bg-transparent p-2 text-sm transition-all duration-100 placeholder-shown:h-9 placeholder-shown:w-24 focus:h-12 focus:w-64 focus:outline-none dark:text-white"></textarea>
            <div
            className="flex justify-between overflow-hidden p-2 text-sm font-medium opacity-100 transition-all duration-100 peer-placeholder-shown:h-0 peer-placeholder-shown:w-0 peer-placeholder-shown:p-0 peer-placeholder-shown:opacity-100 peer-focus:flex peer-focus:h-auto peer-focus:w-auto peer-focus:p-2 peer-focus:opacity-100">
            <a href="#" className="rounded-md bg-gray-100 py-1 px-2 dark:bg-zinc-900 dark:text-white">Cancel</a>
            <input
                type="submit"
                value="Send feedback"
                className="cursor-pointer rounded-md bg-blue-500 py-1 px-2 text-white hover:bg-blue-400 dark:hover:bg-blue-600"
                style={{background: '#ff9000'}}
            />
        </div>
    </form>

}

export default Quickback