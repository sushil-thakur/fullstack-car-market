import { faker } from "@faker-js/faker";
function createRandomeCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://di-uploads-development.dealerinspire.com/bmwofsandiego/uploads/2023/05/BMW-Mobile-1.png',
        miles:1000,
        gearTypes:'Automatics',
        price:faker.finance.amount({min:4000, max:200000})


    };

}
const carList=faker.helpers.multiple(createRandomeCarList,{
    count:7
})
export default{
    carList
}