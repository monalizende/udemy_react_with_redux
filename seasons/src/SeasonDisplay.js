import React from "react"
import "./SeasonDisplay.css"

const getSeason = (latitude, month) => {

        if(month > 0 && month < 9) {
                return latitude > 0 ? 'summer' : 'winter';
        } else {
                return latitude > 0 ? 'winter' : 'summer';
        }
}

const seasonConfig = {
        summer : {
                text: 'Let\'s hit the beach...!!!',
                icon: 'sun'
        },
        winter : {
                text: 'Burr.. it\'s chilly...!!!',
                icon: 'snowflake'
        }
}

const SeasonDisplay = props => {
        const season = getSeason(props.latitude, new Date().getMonth());
        const {text, icon} = seasonConfig[season];

        return (
            <div className={`season-display ${season}`}>
                    <i className={`icon-left massive ${icon} icon`}/>
                    <h1>{text}</h1>
                    <i className={`icon-right massive ${icon} icon`}/>
            </div>
        )
}

export default SeasonDisplay;