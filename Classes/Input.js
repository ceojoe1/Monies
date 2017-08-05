 import React, { Component } from 'react';
 import { AppRegistry, Text ,TextInput, View, BackHandler, TouchableOpacity, Picker, StyleSheet, Image, Dimensions, Alert} from 'react-native';
 import { NavigationActions } from 'react-navigation';


class Input extends Component {
    constructor(props){
        super(props);
        this.state = { text: ''};
    }

    

    render() {
       let f_placeholder = this.props.placeholder;
        return ( 
            <TextInput
                style={styles.input}
                placeholder={f_placeholder}
                onChangeText={(text) => this.setState({text})}
            />
        );
    }
}

export default Input

const styles = StyleSheet.create({

    input: {
        alignSelf: 'stretch',
        marginLeft:5,
        marginRight:5,
        borderRadius: 5,
        height: 50,
        backgroundColor: 'white',
        color: 'gray'
    },

})