import Link from 'next/link'
import  { usePathname } from 'next/navigation';  
import { pageMenuLinks } from '@/app/dataset/links';
export default function PageMenuItem() {
  const pathname = usePathname(); 
 
    
    return (
      <>   
      {Object.entries(pageMenuLinks).map(([path, label]) => {
          const isActive = pathname === path;

          return (
            <Link key={path}  className={`cursor-pointer ${isActive && 'menu-active'}`}   
             href={path} ><span aria-disabled={isActive} tabIndex={isActive ? -1 : 0} className="cursor-pointer">{label}</span></Link>
          )
        })}
      
      </>
    )
}