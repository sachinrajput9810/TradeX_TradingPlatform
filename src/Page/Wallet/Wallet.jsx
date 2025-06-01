import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WalletIcon } from 'lucide-react'
import { CopyIcon } from '@radix-ui/react-icons'
const Wallet = () => {
  return (
    <div className="flex flex-col items-center">
      <div className='pt-10 w-full lg:w-[60%]'>
          
          <Card className="bg-[#0f172a] text-white border-none shadow-lg">
              <CardHeader className="pb-9">
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-5'>
                    <WalletIcon size={30} />
                    <div>
                      <CardTitle className="text-2xl font-bold">My Wallet</CardTitle>
                      <div className="flex items-center gap-2 ">
                          <p className='text-gray-200 text-sm' >#A475ED</p>
                          <CopyIcon className="cursor-pointer hover:text-slate-300" />
                      </div>
                    </div>
                  </div>
                  <div>
        
                  </div>
                </div>
              </CardHeader>
          </Card>



      </div>
    
    </div>
  )
}

export default Wallet
