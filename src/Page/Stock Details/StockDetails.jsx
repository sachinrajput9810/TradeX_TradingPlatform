import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { BookmarkFilledIcon, DotIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TradingForm from './TradingForm'
import StockChart from '../Home/StockChart'

// ✅ Helper component to lock scroll when mounted
const PreventScroll = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return null
}

const StockDetails = () => {
  return (
    <div className='p-5 mt-5'>
      <div className='flex justify-between items-center'>

        {/* Left: Coin Info */}
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

        {/* Right: Bookmark + Trade Button */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <BookmarkFilledIcon className='h-6 w-6 text-white' />
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="relative overflow-hidden px-8 py-2 rounded-lg font-semibold text-white
                  bg-gradient-to-r from-green-400 via-green-500 to-lime-400
                  bg-[length:300%_300%] animate-gradientShift shadow-xl
                  hover:scale-105 transition-transform duration-300"
              >
                <span className="absolute top-0 left-[-50%] w-1/2 h-full bg-white opacity-20
                  transform rotate-12 animate-shine"></span>

                <span className="relative z-10">Trade</span>
              </button>
            </DialogTrigger>

            <DialogContent className="fixed inset-0 overflow-hidden">
              {/* 👇 Prevent scrolling when this dialog is open */}
              <PreventScroll />

              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className='mt-5'>
        <StockChart />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes shine {
          0% {
            left: -50%;
            opacity: 0.2;
          }
          50% {
            left: 100%;
            opacity: 0.4;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        .animate-gradientShift {
          animation: gradientShift 3s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default StockDetails
