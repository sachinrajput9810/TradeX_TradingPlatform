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

const SigninForm = () => {

  const form = useForm({
    resolver: undefined, // Add resolver here if using one (e.g. zodResolver(schema))
    defaultValues: {
      email: '',
      password : '' ,
    }
  })

  const onSubmit = (data) => {
    console.log("Payment Details Submitted:", data)
  }

  return (
    
    <div className='px-6 py-6'>
      <h1 className='text-xl font-bold text-center pb-3  '>Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

        
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormControl>
                  <Input
                    // name="ifsc"
                    placeholder="tradeboy@example.com"
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
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormControl>
                  <Input
                    // name="accountNumber"
                    placeholder="Your password"
                    {...field} 
                    className="w-full border border-gray-700 rounded-lg p-4 text-white bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

         

            <Button
                className="w-full py-5 text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 rounded-xl"
                type="submit"
            >
              Submit
            </Button>



        </form>
      </Form>
    </div>
  )
}

export default SigninForm
