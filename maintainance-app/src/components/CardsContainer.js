import React, {useState,useEffect}from 'react'
import './CardsContainer.css'
import Card from './Card'

const now = Date.now();

function CardsContainer() {
   
    const [tempName, tempSetName] = useState('testBar');
    const [tempYears, tempSetYears] = useState('0');
    const [tempDays, tempSetDays] = useState('0');
    const [tempHours, tempSetHours] = useState('0');
    const [tempMinutes, tempSetMinutes] = useState('0');
    const [tempSeconds, tempSetSeconds] = useState('0');

    const [testitout, settestitout] = useState(0);

    const [name, setName] = useState('testBar');
    const [years, setYears] = useState('0');
    const [days, setDays] = useState('0');
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [seconds, setSeconds] = useState('0');

    
    let cardArray = [
        {id:'first', n:'Bananas', y: 0, d: 5, h: 0, m: 0, s:0},
        {id:'second', n:'Potatos', y: 0, d: 14, h: 0, m: 0, s:0},
        {id:'third', n:'Rice', y: 5, d: 0, h: 0, m: 0, s:0},
        {id:'fourth', n:'Pick Flowers', y: 0, d: 0, h: 0, m: 1, s:0}
    ]
    
    const reRenderCards=() =>{
        return(
            cardArray.map((item) => (
                <Card key={item.id} 
                name={item.n}
                bgcolor='blue'
                inputYears= {item.y}
                inputDays ={item.d}
                inputHours ={item.h}
                inputMinutes ={item.m}
                inputSeconds ={item.s}
                inputNow = {now}/>
            ))
        )
    }
    // useEffect(()=>{
    //     if (testitout > 0)
    //     {cardArray.push(
    //         {id:'test', n:'test', y: 1, d: 1, h: 1, m: 1, s:1},
    //     );
    //     console.log(cardArray);}
    // }, [testitout]);
    
    const handleSubmit = (e) =>
        {
            e.preventDefault();

            setName(tempName);
            setYears(tempYears);
            setDays(tempDays);
            setHours(tempHours);
            setMinutes(tempMinutes);
            setSeconds(tempSeconds);

            cardArray.push(
                {id:'test', n:'test', y: 1, d: 1, h: 1, m: 1, s:1},
            );
            settestitout(settestitout => settestitout + 1);
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
                
             {/* <Card
                name={name}
                bgcolor='blue'
                inputYears= {years}
                inputDays ={days}
                inputHours ={hours}
                inputMinutes ={minutes}
                inputSeconds ={seconds}
                inputNow = {now}

            >

            </Card> */}
            
            {reRenderCards()}
            

            </div>
        </div>
    )
}

export default CardsContainer
