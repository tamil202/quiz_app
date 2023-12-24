import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './styles/AllinOne.css'

const Main = () => {
  const inpref = useRef(null)
  return (
    
    <>
   <div className='container'>
   <div >
      <h1 className='header'>Quiz APPLICATION</h1>

      <ol className='ol-list'>
        <li>You will asked 10 qusetion </li>
        <li>10 point will be award for corrent answer</li>
        <li>Each question are 3 options. You choose only one option</li>
        <li>You will be review and changes answer before the quiz</li>
        <li>The resdult will declare after finish the quiz</li>
      </ol>

      <div className='form-validation'>
        <form action="" method='post' >
            <input className='input' ref={inpref} type="text" name="name" id="userame"/>  
            <label htmlFor="userName" className='inp-inside'>username</label>
        </form>
    </div>

    <div className='link'>
      <Link className='link-in' to={'quiz'}>Start Quiz</Link>
    </div>
    </div>
   </div>
    
    </>
  )
}

export default Main