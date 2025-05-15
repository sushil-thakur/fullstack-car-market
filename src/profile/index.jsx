import React from 'react'
import Header from '@/components/Header'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
function Profile() {
  return (
    <div>
      <Header/>
      <div className='pz-10 md:20 my-10'>
        <div className='flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>My Listing</h2>
          <Link to={'/add-listing'}>
          <Button>+ Add new Listing</Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Profile