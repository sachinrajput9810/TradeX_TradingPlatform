import React from 'react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'
import { useDispatch } from 'react-redux'
import { addPaymentDetails } from '@/State/Withdrawal/Action'

const PaymentDetailsForm = () => {

  const dispatch = useDispatch() ;

  const form = useForm({
    resolver: undefined, // Add resolver here if using one (e.g. zodResolver(schema))
    defaultValues: {
      accountNumber: '',
      accountHolderName: '',
      ifsc: '',
      bankName: ''
    }
  })

  const onSubmit = (data) => {
    dispatch(addPaymentDetails({
      paymentDetails : data,
      jwt : localStorage.getItem('jwt'),
    }))
    console.log("Payment Details Submitted:", data)
  }

  return (
    <div className='px-6 py-6'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-300">Account Holder Name</FormLabel>
                <FormControl>
                  <Input
                    // name="accountHolderName"
                    placeholder="Trade Boy"
                    {...field}
                    className="w-full border border-gray-700 rounded-lg p-4 text-white bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-300">IFSC Code</FormLabel>
                <FormControl>
                  <Input
                    // name="ifsc"
                    placeholder="YESN0001234"
                    {...field}
                    className="w-full border border-gray-700 rounded-lg p-4 text-white bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-300">Account Number</FormLabel>
                <FormControl>
                  <Input
                    // name="accountNumber"
                    placeholder="************1234"
                    {...field} 
                    className="w-full border border-gray-700 rounded-lg p-4 text-white bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

         <FormField
            control={form.control}
            name="confirmAccountNumber"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-300">Confirm Account Number</FormLabel>
                <FormControl>
                  <Input
                    // name="accountNumber"
                    placeholder="************1234"
                    {...field} 
                    className="w-full border border-gray-700 rounded-lg p-4 text-white bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-sm font-medium text-gray-300">Bank Name</FormLabel>
                <FormControl>
                  <Input
                    // name="accountNumber"
                    placeholder="Yes Bank"
                    {...field} 
                    className="w-full border border-gray-700 rounded-lg p-4 text-white bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

         <DialogClose className="w-full">
            <Button
                className="w-full py-5 text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 rounded-xl"
                type="submit"
            >
              Submit
            </Button>
         </DialogClose>



        </form>
      </Form>
    </div>
  )
}

export default PaymentDetailsForm
