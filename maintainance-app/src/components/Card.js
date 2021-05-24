import React, {useState, useRef, useEffect, Component} from 'react'
import './Card.css'

function Card(props) {

    const {
        name, 
        bgcolor, 
        inputYears, 
        inputDays, 
        inputHours,  
        inputMinutes,
        inputSeconds
    } = props;
    
    const newMilli = 0;
    const percent = 0;
    const calculate=()=>{
        const now = new Date();
        const newMilli = (now.getFullYear() + inputYears)*(1000 * 60 * 60 * 24 * 365)
                        + (now.getDates() + inputDays)*(1000 * 60 * 60 * 24)
                        +  (now.getHours() + inputHours)*(1000 * 60 * 60)
                        +  (now.getMinutes() + inputMinutes)*(1000 * 60)
                        +  (now.getSeconds() + inputSeconds)*(1000);
    }
    calculate();
    const attributes ={
        width: `${percent}%`,
        backgroundColor: bgcolor
    }

    let interval = useRef();
    

    const [timerYears, setTimerYears] = useState('00');
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    const startTimer = () => {
        const countDownDate = new Date(newMilli).getTime();
        const now = new Date().getTime();

        interval = setInterval(() => {
            
            const difference = countDownDate - now;
            const percent = (now / countDownDate) * 100;
            const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 365))/ (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / (1000));

            if (difference < 0) {
                clearInterval(interval.current);
            } else {
                setTimerYears(years);
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
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