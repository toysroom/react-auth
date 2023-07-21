import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import RequireAuth from './components/RequireAuth'
import { useAuth } from './hooks/useAuth'

function App() {

  const { state } = useAuth();

  return (
    <>
      <nav>
        {
          state.isLoggedIn ?
            <NavLink to="/dashboard">Dashboard</NavLink>
          :
          <>
            <NavLink to="/">Login</NavLink> | 
            <NavLink to="/register">Register</NavLink>
          </>
        }
      </nav>
      
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />   
        <Route path='/dashboard' element={ <RequireAuth><Dashboard /></RequireAuth> } />
      </Routes>
    </>
  )
}

export default App
