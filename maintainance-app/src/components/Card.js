import React, {useState, useRef, useEffect, Component} from 'react'
import './Card.css'

const countDownDate = 0;
const newMilli = 0;
function Card(props) {

    const {
        name, 
        bgcolor, 
        inputYears, 
        inputDays, 
        inputHours,  
        inputMinutes,
        inputSeconds,
        inputNow
    } = props;
    
    
    
        let newMilli = (inputYears)*(1000 * 60 * 60 * 24 * 365)
                        + (inputDays)*(1000 * 60 * 60 * 24)
                        +  (inputHours)*(1000 * 60 * 60)
                        +  (inputMinutes)*(1000 * 60)
                        +  (inputSeconds)*(1000);
       
    
    
    const countDownDate = new Date( inputNow + newMilli).getTime();

    let interval = useRef();
    

    const [timerYears, setTimerYears] = useState('00');
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [timerPercent, setTimerPercent] = useState('00');

    const startTimer = () => {
       
        

        interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = countDownDate - now;

            const percent = ((newMilli -(countDownDate- now))/ newMilli) * 100;
            const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365))/ (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / (1000));

            if (difference < 0) {
                clearInterval(interval.current);
                setTimerPercent(100.00);
            } else {
                setTimerYears(years);
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
                setTimerPercent(percent.toFixed(2));

            }
        }, 1000);
    }
    const attributes ={
        width: `${timerPercent}%`,
        backgroundColor: bgcolor
    }
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })
    return (
        <div className ="cardBox">
            <div className = 'cardTitle'>
                <h3>{`${name}`}</h3>
            </div>
            <div className= 'timer-container'>
                {/** section tag defines a section in document */}
                <div>
                    <section>
                        <p>{timerYears}Years</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerDays}Days</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}Hours</p>
                    </section>
                    <section>
                        <p>{timerMinutes}Min</p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}Sec</p>
                    </section>
                    
                </div>
            </div>
            <div className = 'barContainer'>
                <div className = 'barFilling' style = {attributes}>
                    <span className = 'barText'>
                        {attributes.width}
                    </span>
                </div>
            </div>
        
        </div>
    )
}

export default Card