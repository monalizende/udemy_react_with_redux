import React from "react";
import { connect } from "react-redux";

class UserFooter extends React.Component {

    componentDidMount() {
       // this.props.fetchUser(this.props.userId);
    }

    render() {

       const { user } = this.props;

       if(!user) {
           return null
       }

        return (
            <div className={"header"}>
                {this.props.user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user : state.users.find(user => { return user.id === ownProps.userId})}
}

export default connect(mapStateToProps)(UserFooter);