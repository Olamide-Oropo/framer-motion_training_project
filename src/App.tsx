import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';

const Home = lazy(() => import("./routes/Home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen/>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
