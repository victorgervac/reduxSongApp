import { signIn, signOut  } from "../actions/index"
import { connect } from "react-redux"
import { http } from "../apis/AxiosConfig"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'; 
import { useFormInput } from "../Hook/useFormInput";

const Login = () =>{
  const email = useFormInput('', 'Email', 'emailInput')
  const password = useFormInput('', 'Password', 'passwordInput')
  const [signedOn, setSignedOn] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    http
        .post('/users/sign_in', { user: { email: email.value, password: password.value } })
        .then( res => {
          debugger
          setSignedOn(true)
          let currentSession = res.headers.authorization
          // localStorage.setItem(AUTH_KEY, res.headers.authorization)
          // handleLogin(res.headers.authorization)
        })
        .catch( err => {
          console.log('login', err)
          toast.error(err.response.data.error)
        })
        .finally(() => {
         setSignedOn(false)
          // navigate('/', { replace: true })
        })
    // handleLogin({ user: { email: email.value, password: password.value } }, history)
  }
  return(
      <main className="container">
        <Toaster
           position="top-center"
            reverseOrder={false}
        />
        <form onSubmit={handleSubmit} id="login-form" className="mt-3 p-3 bg-gray-400/50">
        <div id="title" className='mb-2 text-3xl'><strong>Login</strong></div>
        <div id="email-label">{email.label}</div>
        <label>E-mail</label>
        <input autoFocus {...email}/>
        <p id="password-label">{password.label}</p>
        <label>Password</label>
        <input type="password" autoComplete="off"{...password} />
        <button id="login-button" className="btn-primary mt-3 p-3" type="submit">login</button>
        </form>
        </main>
  )
}
export default connect (null, {signIn, signOut })(Login)