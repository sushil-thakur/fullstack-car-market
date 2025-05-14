import FakeData from '@/Shared/FakeData'
import React from 'react'
import CarItem from './CarItem'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function MostSearchedCar() {
    console.log(FakeData)
  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16 mb-7 '> Most Searched Car</h2>
                        <Carousel>
                <CarouselContent>  
                    {FakeData.carList.map((car, index)=>(
                                <CarouselItem className="basis-1/4">
                                    <CarItem car={car} key={index}/>
                                </CarouselItem>
            
        ))}

                </CarouselContent>
                <CarouselPrevious style={{ background: 'white', color: 'black', border: '1px solid #d1d5db', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
<CarouselNext style={{ background: 'white', color: 'black', border: '1px solid #d1d5db', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }} />
                </Carousel>
        
    </div>
  )
}

export default MostSearchedCar