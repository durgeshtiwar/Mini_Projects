import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
const anotherusername = "Chai aur code";
const anotherElement = (
  <a href="http://google.com" target='_blanck'>Visit Google</a>
)
const reactElement = React.createElement(
  'a',
  {href: 'http://google.com',target:'_blanck'},
  'Click me to visit google',
  anotherusername
)

ReactDOM.createRoot(document.getElementById('root')).render
(
  reactElement
)
