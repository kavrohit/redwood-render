
import HomePage from './pages/HomePage/HomePage'

import { Router, Route } from '@redwoodjs/router'

import { useAuth } from './auth'
import Callback from './components/Callback/Callback'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path= "/" page = {HomePage} name="home"/>
      <Route path= "/auth/callback" page = {Callback} name ="callback"/>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
