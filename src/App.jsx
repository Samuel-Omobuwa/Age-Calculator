import { useState } from "react";
import AgeCalculatorForm from "./Components/AgeCalculatorForm"
import AgeResult from "./Components/AgeResult"
import {  differenceInDays,  differenceInMonths, differenceInYears } from "date-fns";


function App() {
const[age, setAge] = useState(null);
 
  const calculateAge = (birthDate)=>{
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj)
    const ageMonth = differenceInMonths(today, birthDateObj)
    const ageDays = differenceInDays(today, birthDateObj)
     setAge({
      years: ageYears,
      months: ageMonth,
      days: ageDays,
     })
  };

  return (
    
    // className="bg-white dark:bg-gray-900"
<section className="bg-center bg-no-repeat w-full h-screen bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Age Calculator</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Track your Life's Progress: Age in Years, Months, Days</p>

        <h1 className=" mb-5 text-2xl" >Age Calculator</h1>
     <AgeCalculatorForm calculateAge = {calculateAge} />
    {age && <AgeResult  age= {age} /> }
      
      <h4 className="mb-8 text-lg  mt-6 font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"> &#169; Samuel Omobuwa, 2024. </h4>
    </div>
</section>


  )
}

export default App
