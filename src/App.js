import Home from './pages/Home';
import AccountDetail from './components/AccountDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/:id" element={<AccountDetail/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
