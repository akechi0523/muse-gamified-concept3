
import ScenarioFooter from "../components/scenarioFooter";
import ScenarioHeader from "../components/scenarioHeader";
import Slider from "../components/slider";
import { ChakraProvider, Checkbox, Stack } from "@chakra-ui/react";
import icon1 from "../assets/img/icons/income.svg";
import icon2 from "../assets/img/icons/filing-status.svg";
import icon3 from "../assets/img/icons/adjustments.svg";
import icon4 from "../assets/img/icons/outcome.svg";


const Scenario = ({id, title, income, filing, adjustment, outcome}) => {
  return (
    <ChakraProvider>
      <ScenarioHeader id={id} title={title}/>
      {/* <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-12">
          <div className="flex w-[600px] h-[280px] bg-[#EBF3FE] rounded-lg">
            <div className="w-[45%]">
              <div className="text-lg font-semibold pt-8 pl-7">Income</div>
              <Slider min={income.primary.min} max={income.primary.max} initialValue={income.primary.initialValue}/>
              <div className="flex justify-between items-start px-6 text-[#7C8FAC] text-[10px]">
                <div>{income.primary.label1}</div>
                <div className="text-right">
                  {income.primary.label2}{ income.primary.label3!=null && <span><br/>{income.primary.label3}</span>}
                </div>
              </div>
              { income.primary.label!=null && <div className="text-sm font-semibold px-6">{income.primary.label}</div>}
              { income.isMultiple && 
              <div className="mt-1">
                { income.secondary.title!=null && <div className="text-lg font-semibold pt-2 pl-7">{income.secondary.title}</div>}
                <Slider min={income.secondary.min} max={income.secondary.max} initialValue={income.secondary.initialValue}/>
                <div className="flex justify-between items-center px-6 text-[#7C8FAC] text-[10px]">
                  <div>{income.secondary.label1}</div>
                  <div className="text-right">
                    {income.secondary.label2}{ income.secondary.label3!=null && <span><br/>{income.secondary.label3}</span>}
                  </div>
                </div>
                { income.secondary.label!=null && <div className="text-sm font-semibold px-6">{income.secondary.label}</div>}
              </div> }

            </div>
            <div className="w-[55%] flex justify-end items-end pr-6">
              <img src={income.image} alt="image" />
            </div>
          </div>

          <div className="flex w-[600px] h-[280px] bg-[#EBF3FE] rounded-lg">
            <div className="w-[45%]">
              <div className="text-lg font-semibold pt-8 pl-7">Filing Status</div>
              <div className="pt-6 pl-7">
                <div className="flex items-center gap-2">
                  <Switch />
                  <div className="text-sm">{filing.label}</div>
                </div>
                {filing.label1!=null && 
                  <div className="flex items-center gap-2 mt-2">
                    <Switch />
                    <div className="text-sm">{filing.label1}</div>
                  </div>
                }
              </div>
            </div>
            <div className="w-[55%] flex justify-end items-end pr-6">
              <img src={filing.image} alt="image" />
            </div>
          </div>

          <div className="flex w-[600px] h-[280px] bg-[#EBF3FE] rounded-lg">
            <div className="w-[45%]">
              <div className="text-lg font-semibold pt-8 pl-7">Adjustments</div>
              <div className="pt-6 pl-7">
                <div className="flex items-start gap-2">
                  <Switch />
                  <div className="text-sm">{adjustment.label}</div>
                </div>
                {adjustment.label1!=null && 
                  <div className="flex items-start gap-2 mt-2">
                    <Switch />
                    <div className="text-sm">{adjustment.label1}</div>
                  </div>
                }
              </div>
            </div>
            <div className="w-[55%] flex justify-end items-end pr-6">
              <img src={adjustment.image} alt="image" />
            </div>
          </div>
          <div className="flex w-[600px] h-[280px] bg-[#EBF3FE] rounded-lg">
            <div className="w-[45%]">
              <div className="text-lg font-semibold pt-8 pl-7">Outcome</div>
              <div className="pt-6 pl-7">
                <Stack spacing={3}>
                  <Select bg="white" placeholder={outcome.primary } size='lg' fontSize='xs' />
                  {outcome.isMultiple && <Select bg="white" placeholder={outcome.secondary} size='lg' fontSize='xs' />} 
                  {outcome.third!=null && <Select bg="white" placeholder={outcome.third} size='lg' fontSize='xs' />} 
                </Stack> 
              </div>
            </div>
            <div className="w-[55%] flex justify-end items-end pr-6">
              <img src={outcome .image} alt="image" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center py-12">
        <div className="grid grid-cols-4 gap-8">
          {/**********INCOME***********/}
          <div className="w-[300px] h-[340px] pt-10 shadow-2xl bg-white rounded-lg">
            <div className="px-6 mb-2">
              <img src={icon1} alt="icon-income" className="w-8 h-9" />
              <div className="text-lg font-semibold mt-2">Income</div>
            </div>
            <Slider min={income.primary.min} max={income.primary.max} initialValue={income.primary.initialValue}/>
            <div className="flex justify-between items-start px-6 text-[#7C8FAC] text-[10px]">
              <div>{income.primary.label1}</div>
              <div className="text-right">
                {income.primary.label2}{ income.primary.label3!=null && <span><br/>{income.primary.label3}</span>}
              </div>
            </div>
            { income.primary.label!=null && <div className="text-sm font-semibold px-6">{income.primary.label}</div>}
            { income.isMultiple && 
              <div className="mt-1">
                { income.secondary.title!=null && <div className="text-lg font-semibold pt-2 pl-7">{income.secondary.title}</div>}
                <Slider min={income.secondary.min} max={income.secondary.max} initialValue={income.secondary.initialValue}/>
                <div className="flex justify-between items-center px-6 text-[#7C8FAC] text-[10px]">
                  <div>{income.secondary.label1}</div>
                  <div className="text-right">
                    {income.secondary.label2}{ income.secondary.label3!=null && <span><br/>{income.secondary.label3}</span>}
                  </div>
                </div>
                { income.secondary.label!=null && <div className="text-sm font-semibold px-6">{income.secondary.label}</div>}
              </div> 
            }
          </div>
          {/**********FILING STATUS***********/}
          <div className="w-[300px] h-[340px] pt-10 px-6 shadow-2xl bg-white rounded-lg">
            <div className="mb-2">
              <img src={icon2} alt="icon-filing-status" className="w-8 h-9" />
              <div className="text-lg font-semibold mt-2">Filing Status</div>
            </div>
            <div className="mt-6">
              <button className="w-[222px] h-[44px] px-3 text-xs rounded-md border border-[#FA896B] hover:text-white hover:bg-[#FA896B] text-start">{filing.label}</button>
              {filing.label1 != null && <button className="w-[222px] h-[44px] px-3 text-xs rounded-md border border-[#FA896B] hover:text-white hover:bg-[#FA896B] text-start">{filing.label1}</button>}
            </div>
          </div>
          {/**********ADJUSTMENT*************/}
          <div className="w-[300px] h-[340px] pt-10 px-6 shadow-2xl bg-white rounded-lg">
            <div className="mb-2">
              <img src={icon3} alt="icon-adjustment" className="w-8 h-9" />
              <div className="text-lg font-semibold mt-2">Adjustments</div>
            </div>
            <div className="mt-6">
              <button className="w-[222px] h-[44px] px-3 text-xs rounded-md border border-[#FFAE1F] hover:text-white hover:bg-[#FFAE1F] text-start">{adjustment.label}</button>
              {adjustment.label1 != null && <button className="w-[222px] h-[44px] px-3 text-xs rounded-md border border-[#FFAE1F] hover:text-white hover:bg-[#FFAE1F] text-start">{adjustment.label1}</button>}
            </div>
          </div>
          {/**********OUTCOME*************/}
          <div className="w-[300px] h-[340px] pt-10 px-6 shadow-2xl bg-white rounded-lg">
            <div className="mb-2">
              <img src={icon4} alt="icon-outcome" className="w-8 h-9" />
              <div className="text-lg font-semibold mt-2">Outcome</div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <label className="flex gap-2 cursor-pointer">
                <input type="checkbox" class="accent-[#13DEB9] w-4 h-4" />
                <div className="text-xs">{outcome.primary}</div>
              </label>
              {outcome.isMultiple && <label className="flex gap-2 cursor-pointer">
                <input type="checkbox" class="accent-[#13DEB9] w-4 h-4" />
                <div className="text-xs">{outcome.secondary}</div>
              </label>}
              {outcome.third !=null && <label className="flex gap-2 cursor-pointer">
                <input type="checkbox" class="accent-[#13DEB9] w-4 h-4" />
                <div className="text-xs">{outcome.third}</div>
              </label>}
            </div>
          </div>  
        </div>
      </div>
      <ScenarioFooter />
    </ChakraProvider>
  )
}

export default Scenario;