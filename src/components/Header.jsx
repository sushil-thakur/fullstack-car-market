import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
    const {user, isSignedIn}=useUser();
  return (
    <div className='  flex justify-between items-center shadow-sm p-5  '>
        <img src='/public/logoo.png' width={150} height={100}/>
        <ul className='hidden md:flex gap-16'>
            <li>Home</li>
            <li>Search</li>
            <li>New</li>
            <li>Preowned</li>

        </ul>
        {isSignedIn?
        <div>
            <UserButton/>
            <Link to={'/profile'}>
            <Button>Submit Listing</Button>
            </Link>
        </div>
        :
        <Button>Submit Listing</Button>
}
    </div>
  )
}

export default Header