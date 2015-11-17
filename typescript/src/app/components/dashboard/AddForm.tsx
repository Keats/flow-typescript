import * as React from "react";

interface IAddFormProps {
  placeholder: string;
  callback: (value: string) => void;
}

export class AddForm extends React.Component<IAddFormProps, {}> {
  onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const input = this.refs["addInput"] as HTMLInputElement;
    this.props.callback(input.value);
    input.value = "";
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

export default AddForm;
