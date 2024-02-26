import React from 'react'
import Link from 'next/link'
import  { usePathname } from 'next/navigation';  
import { userMenuLinks } from '@/app/dataset/links';
export default function userMenuItem() {
  const pathname = usePathname(); 
   
    
    return (
      <>   
      {Object.entries(userMenuLinks).map(([path, label]) => {
          const isActive = pathname === path;

          return (
            <Link key={path}  className={`cursor-pointer ${isActive && 'menu-active'}`}   
             href={path} ><span aria-disabled={isActive} tabIndex={isActive ? -1 : 0} className="cursor-pointer">{label}</span></Link>
          )
        })}
      
      </>
    )
}
