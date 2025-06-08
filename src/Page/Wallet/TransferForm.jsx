import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { transferMoney } from '@/State/Wallet/Action'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const TransferForm = () => {
  const dispatch = useDispatch()
  const {wallet} = useSelector(store => store)
  const [formData, setFormData] = React.useState({
    amount: '',
    walletId: '',
    purpose: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    dispatch(transferMoney({
      jwt : localStorage.getItem('jwt'),
      walletId : formData.walletId,
      reqData : {
        amount : formData.amount,
        purpose : formData.purpose, 
      }
    }))
    console.log("Transfer Details:", formData)
  }

  return (
    <div className="pt-10 space-y-6">
      {/* Transfer Amount */}
      <div className="flex flex-col">
        <h1 className="pb-1 text-lg font-semibold">Enter Transfer Amount</h1>
        <Input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          className="py-6 text-lg"
          placeholder="$9999"
        />
      </div>

      {/* Wallet ID */}
      <div className="flex flex-col">
        <h1 className="pb-1 text-lg font-semibold">Wallet ID</h1>
        <Input
          name="walletId"
          onChange={handleChange}
          value={formData.walletId}
          className="py-6 text-lg"
          placeholder="#A475EDF"
        />
      </div>

      {/* Purpose */}
      <div className="flex flex-col">
        <h1 className="pb-1 text-lg font-semibold">Purpose</h1>
        <Input
          name="purpose"
          onChange={handleChange}
          value={formData.purpose}
          className="py-6 text-lg"
          placeholder="Gift for your friend..."
        />
      </div>

      {/* Transfer Button */}
      <DialogClose className="w-full">
        <Button
          onClick={handleSubmit}
          className="w-full py-6 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 transition"
        >
          Transfer Now
        </Button>
      </DialogClose>
    </div>
  )
}

export default TransferForm
