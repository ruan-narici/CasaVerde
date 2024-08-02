import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export default function AppRouter() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}