import React, { PropTypes } from "react";


class AddForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.callback(this.refs.addInput.value);
    this.refs.addInput.value = "";
  }

  render() {
    const { placeholder } = this.props;

    return (
      <form className="addForm" onSubmit={this.onSubmit.bind(this)}>
        <input type="text" placeholder={placeholder} ref="addInput" />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

AddForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default AddForm;
