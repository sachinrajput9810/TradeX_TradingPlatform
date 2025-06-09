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
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAssets } from '@/State/Asset/Action'
import { store } from '@/State/Store'

const Portfolio = () => {
  const dispatch = useDispatch() 
  const {asset} = useSelector(store => store)

  useEffect( () => {
    dispatch(getUserAssets(localStorage.getItem('jwt' )))
  } , [])


  return (
    <div className='p-5 lg:px-20'>
       <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
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
        {console.log('asset', asset)}
        { asset.userAssets.map((item , index) =>  <TableRow key={index} >
          <TableCell>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  className="h-10 w-10 rounded-full"
                  src= {item.coin.image}
                />
              </Avatar>
              <span className="text-sm font-semibold">{item.coin.name}</span>
            </div>
          </TableCell>
          <TableCell>{item.coin.symbol.toUpperCase()}</TableCell>
          <TableCell>{item.quantity}</TableCell>
          <TableCell>{item.coin.price_change_24h}</TableCell>
          <TableCell>{item.coin.price_change_percentage_24h}</TableCell>
          <TableCell className="text-right">{item.coin.total_volume}</TableCell>
        </TableRow> )  }
       
      </TableBody>
        </Table>
    </div>
  )
}

export default Portfolio
