import { Outlet, Link } from "react-router-dom";

const Home = () =>{
  return (
     <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link>|{" "}
        <Link to="/songs">Songs</Link> 
        {/* {isSignedin && <div>Sign Out</div>} */}
      </nav>
      <Outlet />
    </div>
  )
}
export default Home