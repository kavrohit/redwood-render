
import HomePage from './pages/HomePage/HomePage'

import { Router, Route } from '@redwoodjs/router'
import Callback from './components/Callback/Callback'
import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path= "/" page = {HomePage} name="home"/>
      <Route path= "/api/auth/callback" page = {Callback} name ="callback"/>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
