import { useEffect } from 'react'

import { navigate } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
const Callback = () => {
  const { logIn } = useAuth()

  useEffect(() => {
    logIn().then(() => {
      navigate(routes.())
    })
  }, [])

  return <div>Logging in...</div>
}

export default Callback
