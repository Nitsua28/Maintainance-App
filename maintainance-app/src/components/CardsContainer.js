import React from 'react'
import './CardsContainer.css'
import Card from './Card'



function CardsContainer() {
    let years = 0;
    let days = 0;
    let hours = 0;
    let minutes = 1;
    let seconds = 0;

    const now = Date.now();
    
    function giveInfo()
        {
           
        };
    
    return (
        <div className= 'CC-maintainance-section'>
            <div className = 'CC-header-section'>
                <div className = 'CC-input-section-title'>
                    <h2>
                        Input Info =>
                    </h2>
                </div>
                <div className = 'CC-input-section'>
                    <form name= 'inputForm'>
                        <label>
                            NAME
                        </label>
                        <input type= 'text'>
                        </input>
                        <label>
                            How Long?
                        </label>
                        <input type= 'text'>
                        </input>
                        <button onClick= {giveInfo()}>
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
