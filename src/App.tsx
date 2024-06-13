import { Navigate, Route, Routes } from 'react-router-dom';

import PickUp from 'pages/PickUp/PickUp';
import PickUps from 'pages/PickUps/PickUps';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Navigate to='/pickups' replace />} />
        <Route path='pickups' element={<PickUps />} ></Route>
        <Route path='pickups/:id' element={<PickUp />} />
        <Route path='*' element={<Navigate to='/pickups' replace />} />
      </Route>
    </Routes>
  );
}

export default App;
