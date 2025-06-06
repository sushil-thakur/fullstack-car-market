import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function MyListing() {
  return (
    <div className='flex justify-between items-center'>
          <h2 className='font-bold text-4xl'>My Listing</h2>
          <Link to={'/add-listing'}>
          <Button>+ Add new Listing</Button>
          </Link>
          </div>
        
  )
}

export default MyListing