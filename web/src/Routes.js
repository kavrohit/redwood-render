import { Router, Route } from '@redwoodjs/router'

import { useAuth } from './auth'
import Profile from './components/Profile/Profile'
import HomePage from './pages/HomePage/HomePage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/profile" page={Profile} name="profile" />
      {/* <Route path="/login" page={AuthPage} name="login" /> */}
    </Router>
  )
}

export default Routes
