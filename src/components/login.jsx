import React, { useState, useContext} from 'react'
import { BoxContext } from "../context-providers/BoxContext";
import './css/login.css';

const Login = () => {
  const [userName, setUser] = useState('')
  const [userError, setUserError] = useState('')
  const {setClientId, goToPage} = useContext(BoxContext)


  const onButtonClick = () => {
    setUserError('')
  
    if ('' === userName) {
      setUserError('Please enter your username')
      return
    }
    setClientId(userName)
    goToPage("/AddItems"); 
  }

  // useEffect(() => {
  //   let clientData = {clientId: userName, items: []}
  //   localStorage.setItem('clientJSON', JSON.stringify(clientData));
  // }, [userName]);
  
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