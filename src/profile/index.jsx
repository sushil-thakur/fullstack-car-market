import React from 'react'
import Header from '@/components/Header'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import MyListing from './components/MyListing'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
function Profile() {
  return (
    <div>
      <Header/>
      <div className='pz-10 md:20 my-10'>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <MyListing/>
     
      </div>

    </div>
  )
}

export default Profile