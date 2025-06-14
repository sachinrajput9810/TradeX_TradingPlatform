import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { paymentHandler } from '@/State/Wallet/Action'
import { DotFilledIcon } from '@radix-ui/react-icons'
import React from 'react'
import { useDispatch } from 'react-redux'

const TopUpForm = () => {

  const [amount, setAmount] = React.useState("")
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY")
  const dispatch = useDispatch()

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value)
  }

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(paymentHandler({ jwt : localStorage.getItem('jwt') ,
      paymentMethod ,
      amount
    }))
  }

  return (
    <div className='pt-10 space-y-5'>
      
      <div>
        <h1 className='pb-1'>Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          className="py-2 text-lg mt-2 mb-4"
          placeholder="$9999"
        />
      </div>

      {/* Payment Method Selection */}
      <div>
        <h1 className='pb-1'>Select Payment Method</h1>
        <RadioGroup
          className="flex gap-5"
          value={paymentMethod}
          onValueChange={handlePaymentMethodChange}
        >
          {/* Razorpay */}
          <label
            htmlFor="razorpay"
            className={`flex items-center space-x-3 p-3 px-5 rounded-md cursor-pointer transition ${
              paymentMethod === "RAZORPAY" ? "border border-[#3182ce]" : "border border-transparent"
            }`}
          >
            <div className="relative h-6 w-6 rounded-full border border-gray-400 flex items-center justify-center">
              {paymentMethod === "RAZORPAY" && (
                <DotFilledIcon className="text-black" />
              )}
            </div>

            <RadioGroupItem
              value="RAZORPAY"
              id="razorpay"
              className="sr-only"
            />

            <div className='bg-white rounded-md px-5 py-2 w-32 flex items-center justify-center'>
              <img
                src="https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png"
                alt="Razorpay"
                className="h-6 object-contain"
              />
            </div>
          </label>

          {/* Stripe */}
          <label
            htmlFor="stripe"
            className={`flex items-center space-x-3 p-3 px-5 rounded-md cursor-pointer transition ${
              paymentMethod === "STRIPE" ? "border border-[#635bff]" : "border border-transparent"
            }`}
          >
            <div className="relative h-6 w-6 rounded-full border border-gray-400 flex items-center justify-center">
              {paymentMethod === "STRIPE" && (
                <DotFilledIcon className="text-black" />
              )}
            </div>

            <RadioGroupItem
              value="STRIPE"
              id="stripe"
              className="sr-only"
            />

            <div className='bg-white rounded-md px-2 py-1 w-32 flex items-center justify-center'>
              <span
                className="text-[#635bff] font-extrabold text-[22px] tracking-wide lowercase"
                style={{ fontFamily: `'Helvetica Neue', Helvetica, Arial, sans-serif` }}
              >
                stripe
              </span>
            </div>
          </label>
        </RadioGroup>
      </div>

      {/* Submit Button */}
      <DialogClose className="w-full">
        <Button
          onClick={handleSubmit}
          className="w-full py-6 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 transition"
        >
          Submit
        </Button>
      </DialogClose>

      
    </div>
  )
}

export default TopUpForm
