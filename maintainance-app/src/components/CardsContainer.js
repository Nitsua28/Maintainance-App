import React from 'react'
import './CardsContainer.css'
import Card from './Card'



function CardsContainer() {
    let num = 50;
    
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
                inputYears= {num}
                inputDays ={num}
                inputHours ={num}
                inputMinutes ={num}
                inputSeconds ={num}

            >

            </Card>

            </div>
        </div>
    )
}

export default CardsContainer
