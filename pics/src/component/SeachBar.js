import React from "react"

class SearchBar extends React.Component {


    state = {
        keyword : ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.keyword);
    }

    render() {
        return (
            <div className={"ui segment"} style={{marginTop:"10px"}}>
                <form onSubmit={this.onFormSubmit} className={"ui form"}>
                    <div className={"field"}>
                        <label>Image Search</label>
                    <input
                        value={this.state.keyword}
                        type={"text"}
                        onChange={(e) => this.setState({keyword : e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar