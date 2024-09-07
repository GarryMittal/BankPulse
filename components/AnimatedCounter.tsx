'use client';
import React from "react";
import { formatAmount } from "@/lib/utils";
import CountUp from "react-countup";
function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp
        decimals={2}
        decimal=","
        prefix="$"
        end={amount}
      />
    </div>
  );
}

export default AnimatedCounter;
