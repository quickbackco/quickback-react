
<img src="https://i.imgur.com/2wEJ5Is.png" height="100">

# Quickback for react

Listen to your users

https://quickback.co/

## Installation

Install Quickback with npm or yarn

```bash
  npm install @quickbackco/quickback-react
  yarn add @quickbackco/quickback-react
```

## Usage/Examples

```javascript
import React from 'react
import Quickback from '@quickbackco/quickback-react'

function App() {
  return <div>
    <Quickback id="[quickback-id]" />
  </div>
}
```

## Parameters


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| id | `string` | **Required**. Given Quickback id |
| placeholder| `string` |  Customize placeholder text |
| style| `object` |  Customize textarea style. (see below) |


## Usage/Examples

```javascript
style={{
  textarea: {}
  focus: {}
}}

-----------------------------------------------------------------------------------------

<Quickback id="[quickback-id]" placeholder="Customize ?" style={{focus: {width: '24rem', height: '10rem'}}} />
```

