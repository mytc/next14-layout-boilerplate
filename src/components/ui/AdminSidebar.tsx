'use client'
import { adminSibarLinks } from "@/app/dataset/iconlinks";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();
  
  return (
    <div>
        <div className='flex items-center justify-center mt-3 p-2'>
                <div className='avatar '>
                        <Image
                            src="/no-avatar.png"
                            alt="profile avatar"
                            className="rounded-full border-spacing-2 ring-2 ring-white-500"
                            width={50}
                            height={50}
                            priority
                        />
                </div>
                <div>
                    <h1 className='hidden md:flex px-2 text-white font-bold'>My Name</h1>
                </div>                
        </div>

        <div className="flex mt-3 ">
            <div className="border-t border-gray-200 w-full">
                  {Object.entries(adminSibarLinks).map(([path, { name, icon }]) => {
                      const isActive = pathname === path;

                      return (
                        <Link key={path}  className={cn('text-white cursor-pointer flex py-5 flex-row items-center hover:bg-slate-500 justify-center md:justify-start', isActive ? ' bg-slate-500 ' : '')   }
                        href={path} > <span className="px-2 text-2xl  md:text-xl ">{icon}</span>
                        <span aria-disabled={isActive} tabIndex={isActive ? -1 : 0} className="hidden md:flex cursor-pointer px-2 flex-row">
                         {name}</span></Link>
                      )
                    })}
            </div>
        </div>

    </div>
  )
}
