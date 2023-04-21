import { Router, Route } from '@redwoodjs/router'

import AuthPage from './components/Auth/LoginPage'
import Profile from './components/Profile/Profile'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={AuthPage} name="login" />
      <Route path="/profile" page={Profile} name="profile" />
    </Router>
  )
}

export default Routes
