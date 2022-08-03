import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Invoices from './Invoices';
import Invoice from './Invoice';
import  Login  from './Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/" element={<Home />}>
          <Route path="songs" element={<SongList />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>

   
  );
};

export default App;
