import React from "react";
import BaseControl, { ControlProps } from "./BaseControl";
// import DynamicActionCreator from "components/editorComponents/DynamicActionCreator";
import { ActionCreator } from "components/editorComponents/ActionCreator";

class ActionSelectorControl extends BaseControl<ControlProps> {
  handleValueUpdate = (newValue: string) => {
    const { propertyName } = this.props;
    this.updateProperty(propertyName, newValue);
  };

  render() {
    const { propertyValue } = this.props;

    return (
      <ActionCreator
        additionalAutoComplete={this.props.additionalAutoComplete}
        isValid={this.props.isValid}
        onValueChange={this.handleValueUpdate}
        validationMessage={this.props.errorMessage}
        value={propertyValue}
      />
    );
  }

  static getControlType() {
    return "ACTION_SELECTOR";
  }
}

export default ActionSelectorControl;
