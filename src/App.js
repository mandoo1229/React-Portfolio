import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './page/Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
