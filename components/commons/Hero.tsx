import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DzikirPagi from "@/components/atoms/DzikirPagi";

const Hero = () => {
  return (
    <div className="w-full py-20">
      <div className="lg:max-w-6xl mx-auto px-5">
        <div className="mt-5">
          <DzikirPagi title="Dzikir Pagi Page" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
