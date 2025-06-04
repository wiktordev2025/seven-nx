import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Carter = React.lazy(() => import('carter/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/carter">Carter</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="react-top" />} />
        <Route path="/carter" element={<Carter />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
