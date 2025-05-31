import { Button } from "@/components/ui/button";
import React from 'react';
import AssetTable from './AssetTable';
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DotIcon } from "@radix-ui/react-icons";
import { X, MessageCircle } from "lucide-react";

const Home = () => {
  const [category, setCategory] = React.useState("all");

  const handleCategory = (value) => {
    setCategory(value);
  };

  // Utility to return white style if active
  const getButtonClass = (value) =>
    `rounded-full ${
      category === value ? "bg-white text-black hover:bg-gray-100" : ""
    }`;

  return (
    <div className="relative">
       <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              onClick={() => handleCategory("all")}
              variant={category === "all" ? "default" : "outline"}
              className={getButtonClass("all")}
            >
              All
            </Button>

            <Button
              onClick={() => handleCategory("top50")}
              variant={category === "top50" ? "default" : "outline"}
              className={getButtonClass("top50")}
            >
              Top50
            </Button>

            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category === "topGainers" ? "default" : "outline"}
              className={getButtonClass("topGainers")}
            >
              Top Gainers
            </Button>

            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category === "topLosers" ? "default" : "outline"}
              className={getButtonClass("topLosers")}
            >
              Top Losers
            </Button>
          </div>
          <AssetTable/>
        </div>

        <div className='hidden lg:block lg:w-[50%] p-5'>
            <StockChart/>

            <div className="flex gap-5 items-center">
                 <div>
                     <Avatar>
                        <AvatarImage src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628" />
                     </Avatar>
                 </div>
                    <div>
                       <div className="flex items-center gap-2">
                            <p>ETH</p>
                            <DotIcon className="text-gray-400" />
                              <p className="text-gray-400">Ethereum</p>
                        </div> 
                        <div className="flex items-end gap-2">
                            <p className="text-xl font-bold">5464</p>
                            <p className="text-red-600">
                                <span>-4325223223.3</span>
                                <span>(-0.2232323%)</span>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
      
       </div>
       <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2">

             <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900    ">
                 <div className="flex justify-between items-center border-b px-6 h-[12%]">
                      <p>Chat Bot</p>
                      <Button variant="ghost" size="icon">
                              <X/>
                      </Button>
                 </div>
             </div>



              <div className="relative w-[10rem] cursor-pointer group " >

                    <Button className="bg-white text-black rounded-lg px-5 py-3 shadow-md hover:bg-gray-100 transition-all flex items-center gap-2 cursor-pointer">
                      <MessageCircle size={30} className="w-5 h-5 text-black -rotate-90" />
                      <span className="text-base font-medium">Chat Bot</span>
                    </Button>

              </div>
       </section>
    </div>
  );
};

export default Home;
