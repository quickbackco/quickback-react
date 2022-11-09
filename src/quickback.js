/* eslint-disable  no-unused-vars */
import React, {useEffect, useRef, useState} from 'react'

const cssCommon = {
    boxSizing: 'border-box',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#e5e7eb',
    lineHeight: 1.5,
    WebkitTextSizeAdjust: '100%',
    MozTabSize: 4,
    tabSize: 4,
    fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    fontFeatureSettings: 'normal'
}

const cssButtonGroup = {
    fontFamily: 'inherit',
    fontSize: '100%',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    margin: 0,
    padding: 0,
    borderRadius: '0.375rem',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
}

const cssBorder = {
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#e5e7eb'
}

const cssForm = {
    ...cssBorder,
    ...cssCommon,
    position: 'fixed',
    zIndex: 99999,
    display: 'flex',
    bottom: '2rem',
    right: '8rem',
    flexDirection: 'column',
    borderRadius: '0.5rem',
    borderWidth: '1px',
    backgroundColor: 'rgb(255 255 255 / 1)'
}


const cssTextarea = {
    ...cssCommon,
    resize: 'none',
    padding: '0.5rem',
    borderWidth: '0px',
    backgroundColor: 'transparent',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionFuration: '100ms',
    height: '2.25rem',
    width: '6rem',
    outline: '0px solid transparent',
    outlineOffset: '0px',
}

const cssWrapper = {
    ...cssCommon,
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '100ms',
    opacity: 1,
    fontWeight: 500,
    height: 0,
    padding: 0
}
const cssCancel = {
    ...cssCommon,
    ...cssButtonGroup,
    color: 'inherit',
    textDecoration: 'inherit',
    backgroundColor: 'rgb(243 244 246 / 1)'
}

const cssQuicksend = {
    ...cssCommon,
    ...cssButtonGroup,
    WebkitAppearance: 'button',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    cursor: 'pointer',
    background: '#ff9000'
}

const Quickback = ({id, placeholder = "Quickback ?", style = {
    textarea: {},
    focus: {}
}}) => {
    const [open, setOpen] = useState(false)
    const [quicking, setQuicking] = useState(false)
    const [sended, setSended] = useState(false)
    const textareaRef = useRef()
    const formRef = useRef()

    const handleCancel = () => {
        textareaRef.current.value = ""
        setOpen(false)
    }

    const handleSubmit = async event => {
        event.preventDefault()
        setQuicking(true)
        const quickback_text = textareaRef.current.value

        await fetch(`${process.env.REACT_APP_API_URL || 'https://quickback.onrender.com/f'}/${id}`, {
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
        setOpen(false)
        setTimeout(setSended(false), 5000)
    }

    useEffect(() => {
        const clickout = event => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                handleCancel()
            }
        }
        document.addEventListener('click', clickout)
        return () => {
            document.removeEventListener('click', clickout)
        }
    }, [textareaRef])

    return <form style={cssForm} ref={formRef} onSubmit={handleSubmit} id="quickback-wrapper-id-system">
        <textarea
            ref={textareaRef}
            name="feedly_text"
            placeholder={placeholder}
            rows="3" minLength="3"
            onClick={() => setOpen(true)}
            style={{...cssTextarea, ...(style.textarea && Object.keys(style.textarea).length && style.textarea), ...(open && ((style.focus && Object.keys(style.focus).length > 0) ? style.focus : {height: '3.25rem',width: '16rem',}))}}
        ></textarea>
        <div style={{...cssWrapper, ...(open && {height: '3.25rem',padding: '0.5rem',})}}>
            <a style={cssCancel} href="#" onClick={handleCancel}>Cancel</a>
            <input
                style={cssQuicksend}
                type="submit"
                value="Quickback"
            />
        </div>
    </form>

}

export default Quickback