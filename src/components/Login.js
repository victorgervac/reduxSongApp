import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from "../actions/userAction";
import { useForm } from 'react-hook-form'
// import { useFormInput } from "../Hook/useFormInput";
import toast, { Toaster } from 'react-hot-toast'; 
import { useEffect } from "react";

const Login = () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, userInfo, error, success} = useSelector((state) => state.user)
  const { register , handleSubmit } = useForm()
  // const email = useFormInput('', 'Email', 'emailInput')
  // const password = useFormInput('', 'Password', 'passwordInput')
  
  // const getFormsInput = () => {
  //   const params = { ...data}
  //   return { user: params }
  // }
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }
  
  return(
      <main style={{marginTop:"5px", display: "flex", justifyContent: "center" }} className="container">

         <Toaster
           position="top-center"
            reverseOrder={false}
        />
         {/* {error && <div>{toast.error(error)}</div>} */}
         
        <form onSubmit={handleSubmit(submitForm)} id="login-form" className="mt-3 p-3 bg-gray-400/50">
        <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          className='form-input'
          {...register('email')}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password</label>
        <input
          autoComplete="off"
          type='password'
          className='form-input'
          {...register('password')}
          required
        />
      </div>
      <button type='submit' className='button' disabled={loading}>
        Login
      </button>
    </form>
        </main>
  )
}
export default Login

const styles = {
  container: {
    margin: "5px",
  }
}
