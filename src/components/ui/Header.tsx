'use client'
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiUser } from 'react-icons/fi';

import SearchBar from './SearchBar';
import { signIn, signOut, useSession } from 'next-auth/react';

import UserMenuItem from '../sections/UserMenuItem';
import MobileUserMenuItem from '../sections/MobileUseerMenuItem';
import PageMenuItem from '../sections/PageMenuItem';

export default function TopMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const userMenuRef = useRef(null);
     
    const { data: session, status } = useSession();
  

    useEffect(() => {
        function handleClickOutside(event:MouseEvent) {
            console.log('event',(event.target as Element).classList.contains('menudiv'))
            console.log('ref', userMenuRef.current, event.target)
 

            if (userMenuRef.current && !(event.target as Element).classList.contains('menudiv')) {
                setIsUserMenuOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSignIn = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signIn(); // Specify the provider as an argument, or default to a sign-in page
      };
    
      const handleSignOut = () => {
        signOut(); // You might want to specify options here
    };

    return (
        <div className="sticky top-0 z-50 bg-white shadow-md">
          
            {/* Logged in menu for desktop view, shown only if session is true */}
            {session && (
                <div className="hidden md:flex  bg-gray-100 p-2">
                    {/* Use 'justify-between' to push the Sign Out button to the far right */}
                    <div className='flex w-full  max-w-screen-2xl justify-end m-auto py-2'>
                        <div className='flex space-x-4'>
                            <UserMenuItem />
                        </div>
                        <button onClick={handleSignOut} className="px-4">
                            Sign Out
                        </button>
                    </div>
                </div>
)}

            <div className=' max-w-screen-2xl m-auto '>
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center">
                <div className="relative md:hidden mr-2 ">
                            <FiUser size={24} className="cursor-pointer" onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} />
                            {isUserMenuOpen && (
                                <div className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 flex flex-col menudiv" ref={userMenuRef}>
                                    {!session ? (
                                        // Social login button for non logged-in users
                                        <button onClick={handleSignIn} className="menudiv px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left">
                                            Sign In
                                        </button>
                                    ) : (
                                        // Logged-in user dropdown menu
                                        <div className='menudiv m-t-menu'>
                                           <MobileUserMenuItem />
                                            <button onClick={handleSignOut} className="menudiv mt-4 px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white w-full text-left">
                                Sign Out
                            </button>
                                        </div> 
                                    )}
                                </div>
                            )}
                        </div>
                    <div className="text-xl font-bold">Logo</div>
                </div>
                <SearchBar />
                <FiMenu size={24} className="cursor-pointer md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />

                {/* Normal menu for desktop view */}
                <div className="hidden md:flex space-x-8">
                   <PageMenuItem />
                    {!session && (
                        <button onClick={handleSignIn} className="hidden md:inline-flex items-center px-4">
                        <FiUser className="mr-2" /> Sign In
                        </button>
                    )}
                </div>
            </div>
            </div>                        
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="menudiv fixed inset-0 bg-gray-600 bg-opacity-50 z-10" onClick={() => setIsMobileMenuOpen(false)}> {/* Overlay */}
                    <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg p-4 transform transition-transform duration-300 ease-in-out">
                        <button className="absolute top-0 right-0 p-4" onClick={() => setIsMobileMenuOpen(false)}>X</button>
                       
                        <nav className="flex flex-col space-y-4 m-p-menu">
                        <PageMenuItem />
                        </nav>
                    </div>
  
                </div>
            )}
        </div>
    );
}
