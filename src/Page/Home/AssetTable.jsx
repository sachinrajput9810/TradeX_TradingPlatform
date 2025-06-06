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
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCoinList } from '@/State/Coin/Action'
import { ScrollArea } from '@/components/ui/scroll-area'

const AssetTable = ({ coin, category }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
    <div className='pl-2'>
      <Table>
        <ScrollArea className={category === "all" ? "h-[75vh]" : "h-[82vh]"}>
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
            {coin.map((item) => (
              <TableRow key={item.id}>
                <TableCell onClick={() => navigate(`/market/${item.id}`)}>
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
                <TableCell>{item.symbol}</TableCell>
                <TableCell>{item.total_volume}</TableCell>
                <TableCell>{item.market_cap}</TableCell>
                <TableCell>{item.price_change_percentage_24h}</TableCell>
                <TableCell className="text-right">{item.current_price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ScrollArea>
      </Table>
    </div>
  )
}

export default AssetTable
