/* eslint-disable  no-unused-vars */
import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

const cssCommon = `
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
    &::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e5e7eb;
        --tw-content: '';
    }
    &::before {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: #e5e7eb;
        --tw-content: '';
    }
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-feature-settings: normal;
`

const cssButtonGroup = `
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
    border-radius: 0.375rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
`

const cssBorder = `
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
`

const Form = styled.form`
    ${cssBorder}
    ${cssCommon}
    position: fixed;
    z-index: 99999;
    display: flex;
    bottom: 2rem;
    right: 8rem;
    flex-direction: column;
    border-radius: 0.5rem;
    border-width: 1px;
    background-color: rgb(255 255 255 / 1);
`

const Textarea = styled.textarea`
    ${cssCommon}
    resize: none;
    padding: 0.5rem;
    border-width: 0px;
    background-color: transparent;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 100ms;
    ${({style}) => (style.textarea && Object.keys(style.textarea).length > 0 )? `${Object.entries(style.textarea).map(([k, v]) => `${k}:${v}`).join(';')};` : 'height: 2.25rem;width: 6rem;'}

    &:placeholder-shown {
        ${({style}) => (style.textarea && Object.keys(style.textarea).length > 0 )? `${Object.entries(style.textarea).map(([k, v]) => `${k}:${v}`).join(';')};` : 'height: 2.25rem;width: 6rem;'}
    }
    &:placeholder {
        opacity: 1;
        color: #9ca3af;
    }
    &:focus {
        outline: 0px solid transparent;
        outline-offset: 0px;
        ${({style}) => (style.focus && Object.keys(style.focus).length > 0) ? `${Object.entries(style.focus).map(([k, v]) => `${k}:${v}`).join(';')};` : 'height: 3rem;width: 16rem;'}
    }
`

const Wrapper = styled.div`
    ${cssCommon}
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 100ms;
    opacity: 1;
    font-weight: 500;
    background-color: ${({color}) => color};
    height: ${({open}) => open ? '3.25rem' : '0'};
    padding: ${({open}) => open ? '0.5rem' : '0'};
`
const Cancel = styled.a`
    ${cssCommon}
    ${cssButtonGroup}
    color: inherit;
    text-decoration: inherit;
    background-color: rgb(243 244 246 / 1);
`

const Quicksend = styled.input`
    ${cssCommon}
    ${cssButtonGroup}
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    cursor: pointer;
    background: #ff9000;
`

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

        await fetch(`https://quickback.onrender.com/f/${id}`, {
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

    return <Form ref={formRef} onSubmit={handleSubmit} id="quickback-wrapper-id-system">
        <Textarea
            ref={textareaRef}
            name="feedly_text"
            placeholder={placeholder}
            rows="3" minLength="3"
            onFocus={() => setOpen(true)}
            style={style}
        ></Textarea>
        <Wrapper open={open}>
            <Cancel href="#">Cancel</Cancel>
            <Quicksend
                type="submit"
                value="Quickback"
            />
        </Wrapper>
    </Form>

}

export default Quickback