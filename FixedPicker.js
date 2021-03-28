import React      from "react";
import { Picker } from "react-native";

export default class FixedPicker extends React.Component {

  render() {
    const key = React.Children.map( this.props.children, child => Object.values( child.props ).join( "," ) ).join( ";" );

    return <Picker { ...this.props } key={ key } />;
  }

}
