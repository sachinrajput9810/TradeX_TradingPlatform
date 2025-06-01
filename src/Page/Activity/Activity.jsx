import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
const Activity = () => {
  return (
    <div className='p-5 lg:px-20'>
       <h1 className='font-bold text-3xl pb-5'>Activity</h1>
      <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="py-5">Date & Time</TableHead>
          <TableHead>Trading Pair</TableHead>
          <TableHead>Buy Price</TableHead>
          <TableHead>Sell Price</TableHead>
          <TableHead>Order Type</TableHead>
          <TableHead className="">Profit/Loss</TableHead>
          <TableHead className="text-right">Value</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {[1,1,1,1,1,1,1,1,1].map((item , index) =>  
        <TableRow key={index} >
        <TableCell>
          <p>2025/05/01</p>
          <p className='text-gray-400'>12:36:04</p>
        </TableCell>
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  className="h-10 w-10 rounded-full"
                  src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                />
              </Avatar>
              <span className="text-sm font-semibold">Bitcoin</span>
            </div>
          </TableCell>
          <TableCell>36,316,873,480</TableCell>
          <TableCell>2,062,249,389,058</TableCell>
          <TableCell>-1.49</TableCell>
          <TableCell className="">$103,771</TableCell>
          <TableCell className="text-right">  
               3432
          </TableCell>
        </TableRow> )  }
             
          </TableBody>
        </Table>
    </div>
  )
}

export default Activity
