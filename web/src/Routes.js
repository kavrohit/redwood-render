import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import Profile from './components/Profile/Profile'
import HomePage from './pages/HomePage/HomePage'

const Routes = () => {
  return (
    <Set prerender>
      <Router useAuth={useAuth}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/profile" page={Profile} name="profile" />
        {/* <Route path="/login" page={AuthPage} name="login" /> */}
      </Router>
    </Set>
  )
}

export default Routes
