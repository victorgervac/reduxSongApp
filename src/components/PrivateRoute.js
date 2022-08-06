import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import { history } from "../Helpers/History";

function PrivateRoute({ redirectPath='/login', children }) {
    //Allows you to extract data from the Redux store state, using a selector function.
    const { userInfo } = useSelector((state) => state.user)
    
    if (!userInfo) {
        // not logged in so redirect to login page with the return url
        return<Navigate to={redirectPath} replace/>
    }
    // authorized so return child components
    return children ? children : <Outlet />
}
export default PrivateRoute