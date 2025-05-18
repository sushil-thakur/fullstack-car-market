import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function DropDownField({ item, handleInputChange }) {
 

  return (
    <div>
      <Select onValueChange={(value)=>handleInputChange(item.name, value)}
        required={item.required}>
        <SelectTrigger className="w-full !bg-white !text-black border border-gray-300">
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent  className="bg-white text-black" >
        {item?.options?.map((option, index) => (
  <SelectItem key={index} value={option}>{option}</SelectItem>
))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default DropDownField