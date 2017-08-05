 import React, { Component } from 'react';
 import { AppRegistry, Text ,TextInput, View, StyleSheet, Image, Dimensions, Alert} from 'react-native';


class Input_Header extends Component {
    constructor(props){
        super(props);
        this.state = { text: ''};
    }

    

    render() {
       let f_header = this.props.header;
        return ( 
            <Text style={styles.header}> {f_header}</Text>
        );
    }
}

export default Input_Header

const styles = StyleSheet.create({

    header: {
        textAlign: 'center',
        height: 50,
        fontSize: 30,
        alignSelf:'stretch',
        color:'gray'
    }

})