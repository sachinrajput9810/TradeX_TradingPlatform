import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog"

import {
  CopyIcon,
  ReloadIcon,
  UpdateIcon,
} from "@radix-ui/react-icons"
import {
  DollarSign,
  ShuffleIcon,
  UploadIcon,
  WalletIcon,
} from "lucide-react"
import TopUpForm from "./TopUpForm"
import WithdrawalForm from "./WithdrawalForm"
import TransferForm from "./TransferForm"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { depositMoney, getUserWallet } from "@/State/Wallet/Action"
import { store } from "@/State/Store"
import { useLocation, useNavigate } from "react-router-dom"

const Wallet = () => {

  function useQuery(){
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()
  const orderId = query.get("order_id")
  // console.log("order id (IN WALLET) ", orderId)
  const paymentId = query.get("payment_id")
  const razorpayPaymentId = query.get("razorpay_payment_id")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const {wallet} = useSelector(store => store)

  const handleFetchUserWallet = () => {
     dispatch(getUserWallet(localStorage.getItem("jwt")))
  } 
  
  useEffect(()=>{
    handleFetchUserWallet()
  } , [])

  useEffect( () => {
    if(orderId){
      console.log("order id is not null")
      dispatch(depositMoney({jwt : localStorage.getItem("jwt")  , 
        orderId , 
        paymentId : razorpayPaymentId || paymentId ,
        navigate
      }))
    }
  } , [orderId, paymentId, razorpayPaymentId])

  

  return (


    <div className="flex flex-col items-center bg-[#060c1c] min-h-screen py-10 px-4">
      <div className="w-full lg:w-[60%]">
        {/* Wallet Card */}
        <Card className="bg-[#0f172a] text-white border border-slate-800 shadow-xl">
          <CardHeader className="pb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} className="text-white" />
                <div>
                  <CardTitle className="text-2xl font-bold">My Wallet</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-gray-300 text-sm">#A475ED</p>
                    <CopyIcon className="cursor-pointer hover:text-white" />
                  </div>
                </div>
              </div>
              <ReloadIcon onClick={handleFetchUserWallet} className="w-6 h-6 cursor-pointer hover:text-white" />
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-2">
              <DollarSign />
              <span className="text-2xl font-semibold">{wallet.userWallet.balance}</span>
            </div>

            <div className="flex gap-7 mt-5">
              {/* Add Money */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer 
                                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <UploadIcon />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Top Up Your Wallet</DialogTitle>
                  </DialogHeader>
                  <TopUpForm />
                </DialogContent>
              </Dialog>

              {/* Withdrawal */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer 
                                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <UploadIcon />
                    <span className="text-sm mt-2">Withdrawal</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Request Withdrawal</DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>

              {/* Transfer */}
              <Dialog>
                <DialogTrigger asChild>
                  <div className="h-24 w-24 hover:text-gray-400 cursor-pointer 
                                  flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md">
                    <ShuffleIcon />
                    <span className="text-sm mt-2">Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">
                      Transfer to Other Wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* History Section */}
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold">History</h1>
            <UpdateIcon className="h-7 w-7 p-0 cursor-pointer hover:text-gray-400" />
          </div>

          <div className="space-y-5">
             
             {[1,1,1,1,1,1,1,1,1].map((item,index) => <div key={index}>
                 <Card className="w-full p-4 bg-slate-900 text-white border border-slate-800 shadow-md">
              <div className="flex justify-between items-center">
                {/* Left side: Icon + Title + Date */}
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-slate-700">
                      <ShuffleIcon className="h-5 w-5 text-white" />
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <h1 className="font-medium">Buy Asset</h1>
                    <p className="text-sm text-gray-400">2025-06-02</p>
                  </div>
                </div>

                {/* Right side: Amount */}
                <p className="text-green-500 font-semibold text-lg">999 USD</p>
              </div>
                 </Card>
             </div>)}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet
