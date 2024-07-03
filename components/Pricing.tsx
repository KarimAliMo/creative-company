import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyPricing from "./MonthlyPricing";
import YearlyPricing from "./YearlyPricing";

const Pricing = () => {
  return (
    <div className=" w-full overflow-x-hidden bg-[#F6F7F8] dark:bg-[#f6f7f8e3]">
      <div className=" container 2xl:px-44 pt-[30vh]">
        <div className=" pt-[78px]">
          <p className=" text-sm text-center text-[#24CDD5]">
            Quisque tellus risus, adipisci
          </p>
          <h3 className=" text-center text-[32px] text-slate-700 capitalize tracking-wider mt-2">
            Pricing Offers
          </h3>
        </div>
        <div className=" flex justify-center mt-8">
          <Tabs defaultValue="monthly" className="">
            <TabsList className=" w-[50vw] relative left-1/2 -translate-x-1/2 mb-10 py-7">
              <TabsTrigger
                value="monthly"
                className=" w-1/2 uppercase py-3 tracking-wider"
              >
                monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className=" w-1/2 uppercase py-3 tracking-wider"
              >
                yearly
              </TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="">
                <MonthlyPricing />
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="">
                <YearlyPricing />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
