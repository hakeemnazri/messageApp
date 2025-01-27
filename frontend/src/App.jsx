import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'


function App() {
  const user = useSelector(selectUser)
  return (
    <div className=' h-screen flex items-center justify-center'> 

    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/login"/> } />
      <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
      <Route path="/signup" element={ user ? <Navigate to="/"/> : <Signup />} />
    </Routes>

    <Toaster/>
    </div>
  )
}

export default App
