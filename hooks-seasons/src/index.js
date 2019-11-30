import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from "./SeasonDisplay"
import Spinner from "./Spinner";
import useLocation from "./useLocation"


const App = () => {

    const [latitude, errorMsg] = useLocation();

    let content;

    if(latitude && !errorMsg) {

        content = <SeasonsDisplay latitude={latitude}/>

    }else if(!latitude && errorMsg) {

        content =  <div>Error : {errorMsg}</div>

    }else {
        content = <Spinner/>
    }


    return <div className={"border red"}>{content}</div>
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
