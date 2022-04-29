import React from 'react'
import { useDispatch } from 'react-redux'
import { autoLogin } from './store/login'

function App() {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])

  return (
    <div className='container'>

    </div>
  )
}

export default App
