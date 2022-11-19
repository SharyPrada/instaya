import React, { useState } from "react";
import { Container } from "react-bootstrap";


const DatePicker = () => {

  const currentDate = new Date();
  const currentDateFormat = `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`;

  const [todate, setTodate]= useState([]); // fecha elegida
  const [todateformat, setTodateformat]= useState(''); // cambiar formato de fecha
      
  const handletodate = (e) => {
    const gettodatevalue= e.target.value;
    const setdateformat= gettodatevalue.split('-');
    const settoyear= setdateformat[0];
    const settomonth= setdateformat[1];
    const settodate= setdateformat[2];
    const settodateformat= settodate+"-"+settomonth+"-"+settoyear;
    setTodate(gettodatevalue);
    setTodateformat(settodateformat);
    console.log("todate: ", todate)
  }
  
  // const handleSubmitDate= (e)=>{
  //   e.preventDefault();
  //   if(todateformat < currentDateFormat || todateformat == currentDateFormat)
  //     alert("Please select valid date");
  //   else
  //     alert("Successfull ! Please set API URL");
  // }


  return(
    <React.Fragment>
      <Container>

      <input type="date" className="form-control" name="todate" placeholder="dd-mm-yyyy" onChange={(e)=>handletodate(e)} />
      <span className="text-danger"> </span>

      </Container>  
    </React.Fragment>
  );
}
export default DatePicker;

