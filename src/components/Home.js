import { Outlet, Link, useNavigate  } from "react-router-dom";
import { http } from '../apis/AxiosConfig'
import toast, { Toaster } from 'react-hot-toast'

const Home = ({ chlidren }) =>{
  const navigate = useNavigate()
  const handleLogout = history => {
    http
        .delete('/users/sign_out')
        .then(res => {
          localStorage.removeItem("Authorization")
          // setCurrentUser(null)
          // eslint-disable-next-line react/prop-types
          navigate('/login')
        })
        .catch(err => {
          toast.error('failed to log out')
        })
        .finally(() => {
          window.location.reload()
        })
  }
  return (
     <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <div>
        <Link to="/invoices">Invoices</Link>|{" "}
        <Link to="/songs">Songs</Link> 
        </div>
        <button onClick={() => handleLogout()}>Logout</button>
        {/* {isSignedin && <div>Sign Out</div>} */}
      </nav>
       <Outlet />
    </div>
  )
}
export default Home