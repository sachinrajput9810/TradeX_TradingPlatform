import React from 'react';
import { Button } from "@/components/ui/button";

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
        </div>
      </div>
    </div>
  );
};

export default Home;
