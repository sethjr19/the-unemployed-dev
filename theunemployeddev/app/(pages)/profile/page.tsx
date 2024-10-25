'use client'
import { useAuth } from '@/app/context/AuthContext'
import { auth } from '@/app/firebase/firebaseConfig'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


type Props = {}

const Profile: React.FC<{ children: React.ReactNode }> = () => {
  const router = useRouter()
  const {user} = useAuth()
  
  useEffect(() => {
    if (!user) {
      router.push('/'); // Redirect to home or login page if not authenticated
    }
  }, [user, router]);

  if (!user) return null;

  const handleLogout = async () => {
    
    try {
      await signOut(auth)
      router.push('/')
    } 
    catch (error) {
      console.log(error)  
    }
    }
  
  
    return (
      <>
      <h1>Profile</h1>
      {user ? (
        <p>{user.email}</p>
      ) : (
        <p>NO USER</p>
      )}
      <button onClick={handleLogout}>Logout</button>
   
      </>
    )
  }
  
  export default Profile;