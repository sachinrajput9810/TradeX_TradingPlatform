import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const AccountVerificationForm = ({ handleSubmit }) => {
  const [value, setValue] = React.useState("");

  const onSubmit = () => {
    console.log("OTP Submitted:", value);
    handleSubmit(); // call the function from parent
  };

  return (
    <div className='flex justify-center'>
      <div className='space-y-5 mt-10 w-full max-w-md'>
        <div className='flex justify-between items-center'>
          <p>Email:</p>
          <p>tradeboy@gmail.com</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                   Send OTP
              </Button>

            </DialogTrigger>
            <DialogContent className="bg-[#0f172a] text-white">
              <DialogHeader>
                <DialogTitle>Enter OTP</DialogTitle>
              </DialogHeader>
              <div className='py-5 flex flex-col items-center gap-6'>
                <InputOTP
                  value={value}
                  onChange={(val) => setValue(val)}
                  maxLength={6}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>

                <DialogClose asChild>
                <Button onClick={onSubmit} className="bg-orange-500 hover:bg-orange-600 text-white w-[10rem]">
                    Submit
                </Button>

                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default AccountVerificationForm;
