import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              {/* Define routes to render different page components at different paths */}
              <Route 
                path="/" 
                element={<Home />} 
              />
              {/* Define a route that will take in variable data */}
              <Route 
                path="/profiles/:profileId" 
                element={<Profile />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
          
    </div>
  );
}

export default App;
