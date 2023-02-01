import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundPage from './Components/NotFoundPage';
import Home from './Components/Pages/Home';
import ParentElements from './Components/Parent/ParentElements';
import LoginScreen from './Components/Screens/LoginScreen';
import TinyIntro from './Components/Tinymce/TinyIntro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentElements><Home /></ParentElements>} />
        <Route path="/Login" element={
          <ParentElements><LoginScreen /></ParentElements>} />
        <Route path="/tiny" element={<TinyIntro />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
