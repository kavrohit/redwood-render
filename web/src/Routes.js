import { Router, Route } from '@redwoodjs/router'

import { useAuth } from './auth'
// import Profile from './components/Profile/Profile'
import HomePage from './pages/HomePage/HomePage'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" />
      {/* <Route path= "/" page = {callback} name ="callback"/> */}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
