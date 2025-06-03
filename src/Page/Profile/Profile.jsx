import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import AccountVerificationForm from './AccountVerificationForm' // adjust path if needed

const Profile = () => {
  const handleEnableTwoStepVerification = () => {
    console.log("Two Step Verification Enabled");
  }

  return (
    <div className='min-h-screen bg-[#060c1c] text-white py-10 px-4 flex justify-center'>
      <div className='w-full lg:w-[60%]'>

        {/* Profile Info Card */}
        <Card className='bg-[#0f172a] border border-slate-800 shadow-md'>
          <CardHeader className="pb-6">
            <CardTitle className="text-white text-2xl">Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex flex-col lg:flex-row justify-between gap-12'>
              {/* Left Column */}
              <div className='space-y-6 w-full lg:w-1/2'>
                <div className='flex items-center'>
                  <p className='w-36 text-gray-300'>Email</p>
                  <p className='text-gray-400'>: tradeboy@gmail.com</p>
                </div>
                <div className='flex items-center'>
                  <p className='w-36 text-gray-300'>Full Name</p>
                  <p className='text-gray-400'>: TradeBoy</p>
                </div>
                <div className='flex items-center'>
                  <p className='w-36 text-gray-300'>Date of Birth</p>
                  <p className='text-gray-400'>: 21/04/2001</p>
                </div>
                <div className='flex items-center'>
                  <p className='w-36 text-gray-300'>Nationality</p>
                  <p className='text-gray-400'>: Indian</p>
                </div>
              </div>

              {/* Right Column */}
              <div className='space-y-6 w-full lg:w-1/2'>
                <div className='flex items-center'>
                  <p className='w-36 text-gray-300'>Address</p>
                  <p className='text-gray-400'>: 123 MG Road</p>
                </div>
                <div className='flex items-center'>
                  <p className='w-36 text-gray-300'>City</p>
                  <p className='text-gray-400'>: Delhi</p>
                </div>
                <div className='flex items-center'>
                  <p className='w-36 text-gray-300'>Postcode</p>
                  <p className='text-gray-400'>: 110001</p>
                </div>
                <div className='flex items-center'>
                  <p className='w-36 text-gray-300'>Country</p>
                  <p className='text-gray-400'>: India</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two Step Verification Section */}
        <div className='mt-6'>
          <Card className="bg-[#0f172a] border border-slate-800 shadow-md">
            <CardHeader className="pb-7">
              <div className='flex items-center gap-3'>
                <CardTitle className="text-white text-xl">Two Step Verification</CardTitle>
                <Badge className="space-x-2 text-white bg-green-600 hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <VerifiedIcon className='w-4 h-4' />
                  <span>Enabled</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="pt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-transform hover:scale-105">
                      Disable Two Step Verification
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#0f172a] border border-slate-700 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-lg">
                        Verify Your Account
                      </DialogTitle>
                    </DialogHeader>

                    {/* FIXED: This was crashing due to missing props */}
                    <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile;
