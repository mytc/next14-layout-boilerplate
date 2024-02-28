'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { Suspense, useRef } from 'react'
import { useState,useEffect } from 'react';

export default function AdminTopBar() {
  const [isProfileMenuOpen, setisProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const { data: session, status } = useSession();
  useEffect(() => {
    function handleClickOutside(event:MouseEvent) {
        console.log('event',(event.target as Element).classList.contains('menudiv'))
    

        if (profileMenuRef.current && !(event.target as Element).classList.contains('menudiv')) {
          setisProfileMenuOpen(false);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

const handleSignOut = () => {
  signOut(); // You might want to specify options here
};
console.log('sess', session)

  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <div className="flex items-center px-4">
                      ssds
        </div>
                      
         <div className="flex items-center pr-4  justify-center">
              <div >
                  <button onClick={() => setisProfileMenuOpen(!isProfileMenuOpen)} ref={profileMenuRef} className='flex'>
                    My name
                   </button>
                    {isProfileMenuOpen && (
                      <div className='absolute right-0 mt-2 p-4 w-48 bg-white rounded-md shadow-xl z-20 flex flex-col items-center'>
                        <Link href={`/users/${session?.user?.email}`} className='p-4 hover:bg-slate-500 w-full text-center'>Profile</Link>
                          <button onClick={handleSignOut} className="p-4 hover:bg-slate-500 w-full border-t ">
                            Sign Out
                        </button>
                      </div>
                    )}
                </div>
           </div>
          </Suspense>
    </>
  )
}
