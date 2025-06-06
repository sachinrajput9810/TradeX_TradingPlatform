import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DotIcon } from '@radix-ui/react-icons'
import React from 'react'

const TradingForm = () => {
  const [orderType, setOrderType] = React.useState("BUY")

  const handleChange = (e) => {
    // handle amount change logic
  }

  return (
    <div className="w-full flex justify-center">
      <div className="space-y-10 p-5 w-full max-w-md">
        <div>
          <div className='flex gap-4 items-center justify-between'>
            <Input
              className="py-7 focus:outline-none"
              placeholder="Enter Amount..."
              onChange={handleChange}
              type="number"
              name="amount"
            />
            <div>
              <p className='border text-2xl justify-center flex items-center w-36 h-14 rounded-md'>4563</p>
            </div>
          </div>
          {false && <h1 className='text-red-600 text-center pt-4'>Insufficient Wallet Balance to Buy</h1>}
        </div>

        <div className='flex items-center gap-5'>
          <div className="p-1 rounded-full border border-gray-600 bg-slate-800">
            <Avatar>
              <AvatarImage src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628" />
            </Avatar>
          </div>

          <div>
            <div className='flex items-center gap-2'>
              <p>BTC</p>
              <DotIcon className='text-gray-400' />
              <p className='text-gray-400'>Bitcoin</p>
            </div>

            <div className='flex items-end gap-2'>
              <p className='text-xl font-bold'>$9898</p>
              <p className='text-red-600'>
                <span>-12233232424.322</span>
                <span> (-0.298823%)</span>
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <p>Order Type</p>
          <p>Market Order</p>
        </div>

        <div className='flex items-center justify-between'>
          <p>{orderType === "BUY" ? "Available Cash" : "Available Quantity"}</p>
          <p>{orderType === "BUY" ? 9000 : 23.04}</p>
        </div>

        <div>
          <Button className={`w-full py-6 ${orderType === "SELL" ? "bg-red-600 text-white" : ""}`}>
            {orderType}
          </Button>
          <Button
            className="w-full mt-5 text-xl"
            variant="link"
            onClick={() => setOrderType(orderType === "BUY" ? "SELL" : "BUY")}
          >
            {orderType === "BUY" ? "Or Sell" : "Or Buy"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TradingForm
