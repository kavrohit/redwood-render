
import HomePage from './pages/HomePage/HomePage'

import { Router, Route } from '@redwoodjs/router'
import Profile from './components/Profile/Profile'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path= "/" page = {HomePage} name="home"/>
      <Route path= "/profile" page = {Profile} name ="callback"/>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
