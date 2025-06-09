import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { addItemToWatchlist, getUserWatchlist } from '@/State/WatchList/Action'
const Watchlist = () => {

  const {watchlist} = useSelector(store => store)

  const handleRemoveToWatchlist = (value) => {
    dispatch(addItemToWatchlist({coinId : value , jwt: localStorage.getItem("jwt")   }));
    console.log("Remove from watchlist", value);
  }

  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(getUserWatchlist(localStorage.getItem('jwt')))
  } , [])
  
 

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
        {watchlist.items.map((item , index) =>  <TableRow key={index} >
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  className="h-10 w-10 rounded-full"
                  src={item.image}
                />
              </Avatar>
              <span className="text-sm font-semibold">{item.name}</span>
            </div>
          </TableCell>
          <TableCell>{item.symbol.toUpperCase()}</TableCell>
          <TableCell>{item.total_volume}</TableCell>
          <TableCell>{item.market_cap}</TableCell>
          <TableCell>{item.price_change_percentage_24h}</TableCell>
          <TableCell className="">${item.current_price}</TableCell>
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
