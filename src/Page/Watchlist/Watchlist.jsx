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
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
const Watchlist = () => {

  const handleRemoveToWatchlist = (value) => {
    console.log("Remove from watchlist", value);
  }


  return (
<div className='p-5 lg:px-20'>
       <h1 className='font-bold text-3xl pb-5'>Watchlist</h1>
      <Table className="border">
      <TableHeader>
        <TableRow>
          <TableHead className="py-5">Coin</TableHead>
          <TableHead>SYMBOL</TableHead>
          <TableHead>VOLUME</TableHead>
          <TableHead>MARKET CAP</TableHead>
          <TableHead>24h</TableHead>
          <TableHead className="">PRICE</TableHead>
          <TableHead className="text-right text-red-600">REMOVE</TableHead>
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
          <TableCell className="">$103,771</TableCell>
          <TableCell className="text-right">  
              <Button
                    className="h-10 w-10 bg-transparent text-white hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    onClick={() => handleRemoveToWatchlist(item.id)}
                    size="icon"
                    variant="ghost"
                  >
                    <BookmarkFilledIcon className="text-white w-6 h-6" />
              </Button>

          </TableCell>
        </TableRow> )  }
       
      </TableBody>
        </Table>
    </div>
  )
}

export default Watchlist
