import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css';

const Login = (props) => {
  const [userName, setUser] = useState('')
  const [userError, setUserError] = useState('')

  const onButtonClick = () => {
    const onButtonClick = () => {
        setUserError('')
      
        if ('' === userName) {
          setUserError('Please enter your username')
          return
        }
      
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userName)) {
          setUserError('Please enter a valid username')
          return
        }
      }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={userName}
          placeholder="Enter your username here"
          onChange={(ev) => setUser(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{userError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login