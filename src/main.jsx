import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import {ClerkProvider} from '@clerk/clerk-react'
import Profile from './profile'
import AddListing from './ass-listing'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/',
    element:<Contact/>
  },
  {
    path:"/profile",
    element:<Profile/>

  },
   {
    path:"/add-listing",
    element:<AddListing/>

  }

])
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
   <RouterProvider router={router}/>
   </ClerkProvider>
  </StrictMode>,
  
)
