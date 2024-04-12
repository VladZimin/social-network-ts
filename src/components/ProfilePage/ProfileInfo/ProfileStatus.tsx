import React, { ChangeEvent } from "react";

export type ProfileStatusType = {
  status: string;
  updateStatus: (status: string) => void;
};

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    value: "",
  };

  componentDidUpdate(prevProps: Readonly<ProfileStatusType>) {
    if (prevProps.status !== this.props.status) {
      this.setState({ value: this.props.status });
    }
  }

  activateEditMode = () => {
    this.setState({ ...this.state, editMode: true });
  };

  deactivateEditMode() {
    this.setState({ ...this.state, editMode: false });
    this.props.updateStatus(this.state.value);
  }

  changeInput(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ ...this.state, value: e.currentTarget.value });
  }

  render() {
    let { status } = this.props;
    return this.state.editMode ? (
      <div>
        <input
          autoFocus
          onBlur={this.deactivateEditMode.bind(this)}
          onChange={this.changeInput.bind(this)}
          value={this.state.value}
        />
      </div>
    ) : (
      <div>
        <span onDoubleClick={this.activateEditMode}>{status}</span>
      </div>
    );
  }
}
