import React, {useState}from 'react'
import './CardsContainer.css'
import Card from './Card'



function CardsContainer() {
   
    const [tempName, tempSetName] = useState('testBar');
    const [tempYears, tempSetYears] = useState('0');
    const [tempDays, tempSetDays] = useState('0');
    const [tempHours, tempSetHours] = useState('0');
    const [tempMinutes, tempSetMinutes] = useState('0');
    const [tempSeconds, tempSetSeconds] = useState('0');

    const [name, setName] = useState('testBar');
    const [years, setYears] = useState('0');
    const [days, setDays] = useState('0');
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    const now = Date.now();
    
    const handleSubmit = (e) =>
        {
            e.preventDefault();

            setName(tempName);
            setYears(tempYears);
            setDays(tempDays);
            setHours(tempHours);
            setMinutes(tempMinutes);
            setSeconds(tempSeconds);
        }
    
    return (
        <div className= 'CC-maintainance-section'>
            <div className = 'CC-header-section'>
                <div className = 'CC-input-section-title'>
                    <h2>
                        Input Info =>
                    </h2>
                </div>
                <div className = 'CC-input-section'>
                    <form name= 'inputForm' onSubmit= {e =>{handleSubmit(e)}}>
                        <label>
                            NAME
                        </label>
                        <input  id = "nameField" 
                                type= 'text'
                                onChange= {e => tempSetName(e.target.value)}>
                        </input>
                        <label>
                            How Long?
                        </label>
                        <label>
                            Years
                        </label>
                        <input  name = "yearField" 
                                type= 'text'
                                onChange= {e => tempSetYears(e.target.value)}>
                        </input>
                        <label>
                            Days
                        </label>
                        <input  name = "dayField" 
                                type= 'text'
                                onChange= {e => tempSetDays(e.target.value)}>
                        </input>
                        <label>
                            Hours
                        </label>
                        <input  name = "hourField" 
                                type= 'text'
                                onChange= {e => tempSetHours(e.target.value)}>
                        </input>
                        <label>
                            Minutes
                        </label>
                        <input  name = "minuteField" 
                                type= 'text'
                                onChange= {e => tempSetMinutes(e.target.value)}>
                        </input>
                        <label>
                            Seconds
                        </label>
                        <input  name = "secondField" 
                                type= 'text'
                                onChange= {e => tempSetSeconds(e.target.value)}>
                        </input>
                        <button type= 'submit'>
                            submit
                        </button>
                    </form>
                
                </div>
            </div>
            <div className= 'CC-cards-section'>
                
             <Card
                name={name}
                bgcolor='blue'
                inputYears= {years}
                inputDays ={days}
                inputHours ={hours}
                inputMinutes ={minutes}
                inputSeconds ={seconds}
                inputNow = {now}

            >

            </Card>

            </div>
        </div>
    )
}

export default CardsContainer
