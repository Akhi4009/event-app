import Button from "../ui/button"
import classes from "./events-search.module.css"
import { useRef } from "react"

const EventSearch = (props) => {
    const yearInputRef=useRef();
    const monthInputRef=useRef();
    
    const submitHandler=(event)=>{
        event.preventDefault()
        const selectedYear=yearInputRef.current.value;
        const selectedMonth=monthInputRef.current.value;
        props.onSearch(selectedMonth,selectedYear)
    }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
    <div className={classes.controls}>
    <div className={classes.control}>
    <label htmlFor="year">Year</label>
    <select id="year" ref={yearInputRef}>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    </select>
    </div>
    <div className={classes.control}>
    <label htmlFor="months">Months</label>
    <select id="months" ref={monthInputRef}>
    <option value="1">Jan</option>
    <option value="2">Feb</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">Agust</option>
    <option value="9">Sep</option>
    <option value="10">Oct</option>
    <option value="11">Nov</option>
    <option value="12">Dec</option>
    </select>
    </div>
    <div>
    <Button>Find events</Button>
    </div>
    </div>
    </form>
  )
}

export default EventSearch