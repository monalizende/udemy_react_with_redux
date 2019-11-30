import React from "react"
class SearchBar extends React.Component {

    state = {
        keyword : ''
    }

    onInputChange = e => {
        this.setState({keyword : e.target.value})
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.keyword);
    }

    render() {
        return (
            <div className={"ui segment"}>
                <form onSubmit={this.onFormSubmit} className={"ui form"}>
                    <label>Video Search</label>
                    <div className={"field"}>
                    <input type={"text"}
                           value={this.state.keyword}
                           onChange={this.onInputChange}
                    />
                    </div>
                </form>
            </div>
            )
    }
}

export default SearchBar;