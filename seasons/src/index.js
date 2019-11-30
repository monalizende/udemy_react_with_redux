import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude : null,
            errorMsg : null
        }

    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude : position.coords.latitude}),
            (err) => this.setState({errorMsg : err.message})

        );
    }


    render() {

        if(this.state.latitude && !this.state.errorMsg) {
           return (
               <SeasonsDisplay latitude={this.state.latitude}/>
           )
        }

        if(!this.state.latitude && this.state.errorMsg) {
            return (
                <div>Error : {this.state.errorMsg}</div>
            )
        }

        return <Spinner/>

    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
