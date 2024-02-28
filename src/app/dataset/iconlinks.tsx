import { MdDashboard, MdEvent, MdPages, MdPeople } from "react-icons/md"

export const adminSibarLinks : {[key: string]: {name:string,icon:any}  } = {
    '/workplace': {name:'Dashboard', icon: <MdDashboard /> },
    '/workplace/events':{name:'Events', icon:<MdEvent />},
    '/workplace/pages':{name:'Pages', icon:<MdPages />},
    '/workplace/users':{name:'Users',icon:<MdPeople />}
}