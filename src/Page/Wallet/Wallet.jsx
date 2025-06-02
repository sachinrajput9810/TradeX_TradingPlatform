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
  DialogHeader
} from "@/components/ui/dialog"

import { CopyIcon, ReloadIcon } from "@radix-ui/react-icons"
import { DollarSign, ShuffleIcon, UploadIcon, WalletIcon } from "lucide-react"
import TopUpForm from "./TopUpForm"
import WithdrawalForm from "./WithdrawalForm"
import TransferForm from "./TransferForm"

const Wallet = () => {
  return (
    <div className="flex flex-col items-center bg-[#060c1c] min-h-screen py-10 px-4">
      <div className="w-full lg:w-[60%]">
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
              <ReloadIcon className="w-6 h-6 cursor-pointer hover:text-white" />
            </div>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-2">
              <DollarSign />
              <span className="text-2xl font-semibold">20000</span>
            </div>

            <div className="flex gap-7 mt-5">

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
                  <TopUpForm/>

                </DialogContent>
              </Dialog>

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
                  <WithdrawalForm/>

                </DialogContent>
              </Dialog>

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
                    <DialogTitle className="text-center text-xl " >Transfer to Other Wallet</DialogTitle>
                  </DialogHeader>
                  <TransferForm/>

                </DialogContent>
              </Dialog>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Wallet
