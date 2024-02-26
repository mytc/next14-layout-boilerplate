import React from 'react'
import Link from 'next/link'
import  { usePathname } from 'next/navigation';  
import { userMenuLinks } from '@/app/dataset/links';
export default function MobileUserMenuItem() {
  const pathname = usePathname(); 
    
    return (
      <>   
      {Object.entries(userMenuLinks).map(([path, label]) => {
          const isActive = pathname === path;

          return (
            <Link key={path} className={`cursor-pointer ${isActive && 'menu-active'}`}   
             href={path} ><span aria-disabled={isActive} tabIndex={isActive ? -1 : 0} className="cursor-pointer menudiv block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white ">{label}</span></Link>
          )
        })}
      
      </>
    )
}
