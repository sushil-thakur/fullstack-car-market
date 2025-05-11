import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from './ui/separator'
import { IoMdSearch } from "react-icons/io";
import Data from '@/Shared/Data';
function Search() {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md
     md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center
    w-[60%] '>
        <Select>
  <SelectTrigger className="outline-none w-full shadow-none text-lg !bg-white !text-black">
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Old</SelectItem>
   
  </SelectContent>
</Select>
<Separator orientation="vertical"className="hidden md:block" />

<Select>
  <SelectTrigger className="outline-none w-full shadow-none text-lg !bg-white !text-black">
    <SelectValue placeholder="Car Makes" />
  </SelectTrigger>
  <SelectContent>

{Data.CarMakes.map((maker, index) => (
  <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
))}
   
   
  </SelectContent>
</Select>
<Separator orientation="vertical" className="hidden md:block"/>

<Select>
  <SelectTrigger className="outline-none w-full shadow-none text-lg !bg-white !text-black">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
    {Data.Pricing.map((price,index)=>(
<SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>
    ))}
    
  </SelectContent>
</Select>
<div>
<IoMdSearch  className='text-[50px] bg-[#0384fc] rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer '/>
</div>

    </div>
  )
}

export default Search