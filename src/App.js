import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Navbar } from './components/Navbar';
import { CreatePost } from './pages/create-post/create-post';
import { Home } from './pages/home/Home';
import { auth } from './config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Facts } from './pages/facts/Facts';

function App() {
  // https://api.agify.io/?name=${name}

  const [user, isLoading] = useAuthState(auth)

  if(isLoading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>
  }

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          {!user && <Route path='/login' element={<Login />}/>}
          {user && <Route path='/createpost' element={<CreatePost />}/>}
          <Route path='/facts' element={<Facts />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='*' element={<h1>Error 404 - Page Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App