import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import PaymentDetailsForm from './PaymentDetailsForm'
import { store } from '@/State/Store'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentDetails } from '@/State/Withdrawal/Action'

const PaymentDetails = () => {
  const {withdrawal} = useSelector(store => store)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPaymentDetails({
      jwt : localStorage.getItem('jwt')
    }))
  } , [])

  const maskAccountNumber = (accountNumber) => {
      const strAccountNumber = String(accountNumber);
      return "*".repeat(strAccountNumber.length - 4) + strAccountNumber.slice(-4);
  };



  const paymentDetailsAvailable = false // change to true/false for testing

  return (
    <div className='min-h-screen bg-[#060c1c] text-white py-10 px-4 flex justify-center'>
      <div className='w-full lg:w-[60%]'>
        <h1 className='text-3xl font-bold mb-8'>Payment Details</h1>

        {withdrawal.paymentDetails ? (
          <Card className='bg-[#0f172a] border border-slate-800 shadow-md'>
            <CardHeader>
              <CardTitle>Yes Bank</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className='flex items-center'>
                <p className='w-32 text-gray-300'>A/C Number</p>
                <p className='text-gray-400'>
                  : {withdrawal.paymentDetails?.accountNumber 
                      ? maskAccountNumber(withdrawal.paymentDetails.accountNumber) 
                      : "N/A"}
                </p>
              </div>
              <div className='flex items-center'>
                <p className='w-32 text-gray-300'>A/C Holder</p>
                <p className='text-gray-400'>: {withdrawal.paymentDetails?.accountHolderName }</p>
              </div>
              <div className='flex items-center'>
                <p className='w-32 text-gray-300'>IFSC</p>
                <p className='text-gray-400'>: {withdrawal.paymentDetails?.ifsc } </p>
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
