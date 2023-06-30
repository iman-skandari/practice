import React,{useState} from 'react'
import './App.css'

const Navbar = () => {
  const lastName = "hadian"
  const [count, setCount] = useState(0)

  

  const buttonClick = () => {
    var myDiv = document.getElementById("salam")
    myDiv.style.display = "none",
    setCount(10)
  }

  return (
    <div>
      <div className='gdgfg' id="salam">
        sdsdsdsd
      </div>
      <button onClick={buttonClick}>
        click bitch
      </button>
      <div>
        {count}
      </div>
    </div>
  )
}


export default Navbar


