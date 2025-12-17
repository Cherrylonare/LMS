// import React from 'react'
// import { DropdownMenu,DropdownMenuTrigger } from '@/components/ui/react-dropdown-menu.jsx'
// import { Sun, Moon } from 'lucide-react'
// import  {DropdownMenuContent, DropdownMenuItem }from '@/components/ui/dropdown-menu.jsx'
// import {Button} from '@/components/ui/button.jsx'
// import { setTheme } from 'next-themes'

//  const Darkmode = () => {
//   return (
    
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
    
//   )
// }
// export default Darkmode