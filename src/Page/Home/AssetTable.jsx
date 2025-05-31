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

const AssetTable = () => {
  return (
    <div className='pl-2'>
        <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Coin</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="text-right">PRICE</TableHead>
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

export default AssetTable
