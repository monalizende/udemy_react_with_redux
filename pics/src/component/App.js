import React from "react";
import SearchBar from "./SeachBar"
import unsplash from "../api/unsplash"
import ImageList from "./ImageList"

class App extends React.Component {

    state = {
        images : []
    }

    onSearchSubmit = async(keyword) => {
     const response = await unsplash.get('/search/photos', {
            params : {
                query : keyword
            }
        });
        this.setState({images : response.data.results})
    }

    render() {

        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                 <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App;