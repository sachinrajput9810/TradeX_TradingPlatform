import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DragHandleHorizontalIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sidebar from './Sidebar'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'



const Navbar = () => {
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center'> 
      <Sheet>
        <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-14 w-14 text-muted-foreground hover:text-foreground"
            >
              <HamburgerMenuIcon className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-72 border-r-0 flex flex-col justify-center" side="left">
            <SheetHeader>
              <SheetTitle>
                <div className='text-3xl flex justify-center items-center gap-1'>
                  <Avatar>
                    <AvatarImage src="https://cdn.pixabay.com/photo/2022/03/03/16/35/nft-7045692_1280.png" />
                  </Avatar>  
                  <div>
                    <span className='font-bold text-orange-700'>Trade</span>
                    <span>X</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />  
          </SheetContent>
      </Sheet>
      
    </div>
  )
}

export default Navbar
