
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
    <Quickback url="[my-url]" />
  </div>
}
```

## Parameters


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| url | `string` | **Required**. Given Quickback url |
| placeholder| `string` |  Customize placeholder text |
| style| `object` |  Customize textarea style. (see below) |


## Usage/Examples

```javascript
style={{
  textarea: {}
  focus: {}
}}

-----------------------------------------------------------------------------------------

<Quickback placeholder="Customize ?" style={{focus: {width: '24rem', height: '10rem'}}} />
```

