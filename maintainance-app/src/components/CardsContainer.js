import React, {useState}from 'react'
import './CardsContainer.css'
import Card from './Card'



function CardsContainer() {
   
    const [years, setYears] = useState('0');
    const [days, setDays] = useState('0');
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    const now = Date.now();
    
    const handleSubmit = (event) =>
        {
            event.preventDefault();
           console.log(event);
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
                    <form name= 'inputForm' onSubmit= {handleSubmit()}>
                        <label>
                            NAME
                        </label>
                        <input id = "nameField" type= 'text'>
                        </input>
                        <label>
                            How Long?
                        </label>
                        <label>
                            Years
                        </label>
                        <input name = "yearField" type= 'text'>
                        </input>
                        <label>
                            Days
                        </label>
                        <input name = "dayField" type= 'text'>
                        </input>
                        <label>
                            Hours
                        </label>
                        <input name = "hourField" type= 'text'>
                        </input>
                        <label>
                            Minutes
                        </label>
                        <input name = "minuteField" type= 'text'>
                        </input>
                        <label>
                            Seconds
                        </label>
                        <input name = "secondField" type= 'text'>
                        </input>
                        <button>
                            submit
                        </button>
                    </form>
                
                </div>
            </div>
            <div className= 'CC-cards-section'>
                
             <Card
                name='testBar'
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
