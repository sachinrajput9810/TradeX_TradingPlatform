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
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
const Watchlist = () => {
  return (
<div className='p-5 lg:px-20'>
       <h1 className='font-bold text-3xl pb-5'>Watchlist</h1>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="">Asset</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Unit</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Change%</TableHead>
          <TableHead className="text-right">Volume</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {[1,1,1,1,1,1,1,1,1].map((item , index) =>  <TableRow key={index} >
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
          <TableCell>BTC</TableCell>
          <TableCell>36,316,873,480</TableCell>
          <TableCell>2,062,249,389,058</TableCell>
          <TableCell>-1.49%</TableCell>
          <TableCell className="text-right">$103,771</TableCell>
        </TableRow> )  }
       
      </TableBody>
        </Table>
    </div>
  )
}

export default Watchlist
