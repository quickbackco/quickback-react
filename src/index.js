import React from 'react'
import ReactDOM from 'react-dom/client'
import Quickback from './quickback'
import styled from 'styled-components'
// import './quickback.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
      <h1>Hello</h1>test
      <Quickback placeholder="Customize ?" style={{focus: {width: '24rem', height: '10rem'}}} />
    </div>
);