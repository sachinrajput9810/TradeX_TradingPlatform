import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { BookmarkFilledIcon, BookmarkIcon, DotIcon } from '@radix-ui/react-icons'
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
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '@/State/Coin/Action'
import { store } from '@/State/Store'
import { addItemToWatchlist, getUserWatchlist } from '@/State/WatchList/Action'
import { existInWatchlist } from '@/Utils/existInWatchlist'

// ✅ Prevent scroll on open
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
  const dispatch = useDispatch();
  const {id} = useParams()

  const {coin , watchlist} = useSelector(store => store)

  useEffect(() => {
    dispatch(fetchCoinDetails({coinId:id , jwt: localStorage.getItem("jwt")  }));
    dispatch(getUserWatchlist(localStorage.getItem('jwt')))
  }, [id])


  const handleAddToWatchList = () =>{
    dispatch(addItemToWatchlist({coinId : coin.coinDetails?.id , jwt: localStorage.getItem("jwt")   }));
  }
 
  return (
    <div className='p-5 mt-5'>
      <div className='flex justify-between items-center'>
        {/* Left Info */}
        <div className='flex items-center gap-5'>
          <div className="p-1 rounded-full border border-gray-600 bg-slate-800">
            <Avatar>
              <AvatarImage src={coin.coinDetails?.image.large} />
            </Avatar>
          </div>

          <div>
            <div className='flex items-center gap-2'>
              <p>{coin.coinDetails?.symbol.toUpperCase()}</p>
              <DotIcon className='text-gray-400' />
              <p className='text-gray-400'>{coin.coinDetails?.name}</p>
            </div>

            <div className='flex items-end gap-2'>
              <p className='text-xl font-bold'>${
                coin.coinDetails?.market_data.current_price.usd
              }</p>
              <p className='text-red-600'>
                <span>{coin.coinDetails?.market_data.market_cap_change_24h}</span>
                <span> ({coin.coinDetails?.market_data.market_cap_change_percentage_24h}%)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <Button onClick={handleAddToWatchList}>
            {existInWatchlist(watchlist.items, coin.coinDetails) ? (
              <BookmarkFilledIcon className="h-6 w-6" />
            ) : (
              <BookmarkIcon className="h-6 w-6" />
            )}
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

            <DialogContent className="flex justify-center items-center py-20">
              <PreventScroll />
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className='mt-5'>
        <StockChart coinId={id} />
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shine {
          0% { left: -50%; opacity: 0.2; }
          50% { left: 100%; opacity: 0.4; }
          100% { left: 100%; opacity: 0; }
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
