import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import PaymentDetailsForm from './PaymentDetailsForm'

const PaymentDetails = () => {
  const paymentDetailsAvailable = false // change to true/false for testing

  return (
    <div className='min-h-screen bg-[#060c1c] text-white py-10 px-4 flex justify-center'>
      <div className='w-full lg:w-[60%]'>
        <h1 className='text-3xl font-bold mb-8'>Payment Details</h1>

        {false ? (
          <Card className='bg-[#0f172a] border border-slate-800 shadow-md'>
            <CardHeader>
              <CardTitle>Yes Bank</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className='flex items-center'>
                <p className='w-32 text-gray-300'>A/C Number</p>
                <p className='text-gray-400'>: **********1234</p>
              </div>
              <div className='flex items-center'>
                <p className='w-32 text-gray-300'>A/C Holder</p>
                <p className='text-gray-400'>: Trade Boy</p>
              </div>
              <div className='flex items-center'>
                <p className='w-32 text-gray-300'>IFSC</p>
                <p className='text-gray-400'>: YESB00000007</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="mt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-6 py-2 rounded-md shadow-lg">
                  Add Payment Details
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#0f172a] border border-slate-700 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Payment Details</DialogTitle>
                </DialogHeader>
                <PaymentDetailsForm />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </div>
  )
}

export default PaymentDetails
