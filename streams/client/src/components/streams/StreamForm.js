import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component{

    renderError({touched, error}) {
        if(touched && error) {
            return (
                <div className={"ui error message"}>
                    <div className={"header"}>{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.touched && meta.error ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className={"ui form error"}>
                <Field name={"title"} component={this.renderInput} label={"Enter title"}/>
                <Field name={"description"} component={this.renderInput} label={"Enter Description"}/>
                <button className={"ui button primary"}>Submit</button>
            </form>
        )
    }
};

const validate = formValues => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "Title is mandatory";
    }
    if(!formValues.description) {
        errors.description = "Description is mandatory";
    }
    return errors;
}

export default reduxForm({
    form : "StreamCreate",
    validate
})(StreamForm);