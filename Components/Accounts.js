 import React, { Component } from 'react';
 import { AppRegistry, Text ,TextInput, View, BackHandler, TouchableOpacity, Picker, StyleSheet, Image, Dimensions, Alert} from 'react-native';
 import { NavigationActions } from 'react-navigation';
 import DateTimePicker from 'react-native-modal-datetime-picker';
import Input from '../Classes/Input.js';
import Input_Header from '../Classes/Input_Header.js';
class Accounts extends Component{

    state = {
        isDateTimePickerVisible: false,
        chosenDate: new Date()
    };

    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    __hideDateTimepicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (date) => {
        this.setState({chosenDate: date});
        this.__hideDateTimepicker();
    };

    render() {
        const newDate = new Date();
        const date = this.state.chosenDate;
        
        return(
        <View style={styles.container}>
            {/*
                Display Date Form
            */}
            <Input_Header header="Date"/>
            <TouchableOpacity style={styles.button} onPress = {this._showDateTimePicker}>
            <Text style={styles.date}>{("0" + (date.getMonth() + 1).toString().substr(-2) + " | 0" + (date.getDate().toString().substr(-2) + " | " + date.getFullYear().toString().substr(-2)))}</Text>
            </TouchableOpacity>

            <DateTimePicker
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimepicker}
            />


            {/*
                Display Subject Form
            */}
            <Input_Header header="Subject"/>
            <Input placeholder="Enter a Subject"/>

            {/*
                Display Amount Form
            */}
            <Input_Header header="Amount"/>
            <Input placeholder="Enter an Amount"/>
           
        </View>
        )
    }
}

export default Accounts

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    date: {
        alignSelf:'stretch',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 5,
        
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    }
})