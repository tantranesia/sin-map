import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Navigate,
} from 'react-router-dom';
import Home from '../pages/Home';

function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route key={1} exact={true} path={'/'} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
