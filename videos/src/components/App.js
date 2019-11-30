import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList"
import VideoDetails from "./VideoDetail"



class App extends React.Component {

    state = {
        videos : [],
        selectedVideo : null
    }

    onSearchSubmit = async keyword => {
            const response = await youtube.get('/search',{
                params: {
                    q: keyword
                }
            })
            this.setState({
                videos : response.data.items,
                selectedVideo : response.data.items[0]
            })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video})
    }

    render() {
        return (
            <div className={"ui container"}>
                <SearchBar onFormSubmit={this.onSearchSubmit}/>
                <div className={"ui grid"}>
                    <div className={"ui row"}>
                        {this.state.selectedVideo ? <div className={"eleven wide column"}><VideoDetails video={this.state.selectedVideo}/></div> : false}
                        <div className={"five wide column"}>
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;