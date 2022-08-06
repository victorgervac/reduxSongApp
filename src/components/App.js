import React from 'react';
import SongList from './SongList';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Invoices from './Invoices';
import Invoice from './Invoice';
import  Login  from './Login';
import SongDetail from './SongDetail';
import PrivateRoute from "../components/PrivateRoute"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home />}>
            <Route path="songs" element={<SongList />} />
            <Route path="details" element={<SongDetail />}/>
            <Route path="invoices" element={<Invoices />}>
              <Route path=":invoiceId" element={<Invoice />} />
            </Route>
          </Route>
        </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
      </Routes>
    </div>
  );
};

export default App;
