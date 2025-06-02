import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import React from 'react'

const WithdrawalForm = () => {
  const [amount, setAmount] = React.useState("")

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = () => {
    console.log("Withdrawal Amount:", amount);
  }

  return (
    <div className="pt-10 space-y-5">
      {/* Balance display */}
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4 text-white">
        <p>Available Balance</p>
        <p>$9000</p>
      </div>

      {/* Withdrawal input */}
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-xl font-bold">Enter Withdrawal Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          type="number"
          min="0"
          max="9000"
          placeholder="$9999"
          className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center w-48"
        />
      </div>

      {/* Bank info */}
      <div>
        <p className='pb-2'>Transfer To</p>
        <div className='flex items-center gap-5 border px-5 py-2 rounded-md'>
          <img
            className='h-8 w-8'
            src='https://t4.ftcdn.net/jpg/05/21/79/35/240_F_521793535_R3TIFqxDcvjYME4O4tVeJspRqyvGbo8E.jpg'
            alt="Bank Icon"
          />
          <div>
            <p className='text-xl font-bold'>Yes Bank</p>
            <p className='text-xs'>***********3673</p>
          </div>
        </div>
      </div>

      {/* Withdraw Button */}
      <DialogClose className="w-full">
        <Button
          onClick={handleSubmit}
          className="w-full py-6 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 transition"
        >
          Withdraw
        </Button>
      </DialogClose>
    </div>
  )
}

export default WithdrawalForm
