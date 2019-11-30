import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {

    static contextType = LanguageContext;

    render() {
        return (
            <div>
                Select language:
                <i className={"us flag"} onClick={() => this.context.onLanguageChange('english')}/>
                <i className={"nl flag"} onClick={() => this.context.onLanguageChange('dutch')}/>
            </div>
        );
    }
}

export default LanguageSelector;