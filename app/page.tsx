import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-2xl lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-2xl">
        <CardList title="latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-2xl">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-2xl">Test</div>
      <div className="bg-primary-foreground p-4 rounded-2xl lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-2xl">
        {" "}
        <CardList title="Popular Content" />
      </div>
    </div>
  );
}
