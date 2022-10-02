import React, {Component} from "react";
import { View, Text } from "react-native";

export default class Button extends Component{
    render(){
        return(
            <View>
                <Text>
                    {this.props.title}
                </Text>
                {this.props.children}
            </View>
        );
    }
}