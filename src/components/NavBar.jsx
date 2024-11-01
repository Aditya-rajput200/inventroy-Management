'use client'

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
function NavBar() {
  const session= useSession()
 
  
  return (
    <>
      <div className=" flex justify-between ">
      <div className="heading">Aditya</div>

      {session.data?.user &&  <button onClick={()=> signOut()} className="button px-5 py-3 bg-white font-bold rounded-lg hover:bg-slate-300 text-gray-700">Log Out</button> }


     {!session.data?.user &&  <button onClick={()=> signIn()} className="button px-5 py-3 bg-white font-bold rounded-lg hover:bg-slate-300 text-gray-700">Login</button> }


      </div>
    </>
  )
}

export default NavBar
