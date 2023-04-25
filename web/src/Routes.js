import { Router, Route } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthPage from './components/Auth/LoginPage'
import Profile from './components/Profile/Profile'
import HomePage from './pages/HomePage/HomePage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" prerender />
      <Route path="/login" page={AuthPage} name="login" />
      <Route path="/profile" page={Profile} name="profile" prerender />
    </Router>
  )
}

export default Routes
