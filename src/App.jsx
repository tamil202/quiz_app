import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Quiz from './components/Quiz';
import Result from './components/Result'
import Main from './Main'

// creater router
const router = createBrowserRouter([
  {
      path:'/',
      element:<Main></Main>
  },
  {
    path:'/quiz',
    element:<Quiz></Quiz>
},
{
  path:'/result',
  element:<Result></Result>
},
])

const App = () => {
  return (
   <>
   {/* provide router in app */}
      <RouterProvider router={router} />
  
   </>
  )
}

export default App