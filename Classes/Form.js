 import React, { Component } from 'react';
 import { AppRegistry, Text ,TextInput, View, BackHandler, TouchableOpacity, Picker, StyleSheet, Image, Dimensions, Alert} from 'react-native';
 import { NavigationActions } from 'react-navigation';
 import DateTimePicker from 'react-native-modal-datetime-picker';

class Input extends Component {


    constructor(props){
        super(props);
        this.state = { text: '',
                        isDateTimePickerVisible: false,
                        chosenDate: new Date()
                    };
    }


    _showDateTimePicker = () => this.setState({isDateTimePickerVisible: true});

    __hideDateTimepicker = () => this.setState({isDateTimePickerVisible: false});

    _handleDatePicked = (date) => {
        this.setState({chosenDate: date});
        this.__hideDateTimepicker();
    };

    
    render() {
        const newDate = new Date();
        const date = this.state.chosenDate;

       let f_placeholder = this.props.placeholder;
       let f_header = this.props.header; 
       let f_choice = this.props.choice;
       let form_component = <View/>; 

        switch (f_choice) {
                    /*
                     * text:
                     *      If the users choice is this,
                     *      display a simple text box to enter
                     *      a string value
                     */
                    case "text":
                            form_component = 
                            <View style={styles.container}>
                                {/*
                                    Form Header
                                */}
                                <Text style={styles.header}> {f_header} </Text>
                                
                                {/*
                                    Text Input box
                                */}
                                <TextInput
                                    style={styles.input}
                                    placeholder={f_placeholder}
                                    onChangeText={(text) => this.setState({text})}
                                />
                            </View>
                        break;
                    /*
                     * date:
                     *      If the users choice is this,
                     *      display a date picker modal and
                     *      return a string of the date value
                     */
                    case "date":
                        form_component = 
                            <View style={styles.container}>
                                {/*
                                    Form Header
                                */}
                                <Text style={styles.header}> {f_header} </Text>
                                
                                {/*
                                    Button to Activate Date Picker
                                */}
                                <TouchableOpacity style={styles.button} onPress = {this._showDateTimePicker}>
                                <Text style={styles.input}>{("0" + (date.getMonth() + 1).toString().substr(-2) + " | 0" + (date.getDate().toString().substr(-2) + " | " + date.getFullYear().toString().substr(-2)))}</Text>
                                </TouchableOpacity>

                                {/*
                                    Date Picker
                                */}
                                <DateTimePicker
                                    isVisible={this.state.isDateTimePickerVisible}
                                    onConfirm={this._handleDatePicked}
                                    onCancel={this._hideDateTimepicker}
                                />
                            </View>
                        break;
                        
                
                    default:
                        break;
                }
        return  form_component;
    }
}

export default Input

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        backgroundColor: 'rgba(200,200,200,0.3)',
        justifyContent: 'center',
        paddingLeft: 25,
        paddingRight:25,
        paddingBottom: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        alignSelf: 'stretch',
        marginLeft:5,
        marginRight:5,
        borderRadius: 5,
        textAlign: 'center',
        height: 50,
        backgroundColor: 'rgba(200,200,200,0.3)',
        fontSize: 20, 
        color: '#1f92d4'
    },
    header: { 
        fontSize: 30,
        color: 'gray',
        fontWeight: 'bold'
    },
    
    date: {
        alignSelf: 'stretch',
        textAlign:'center',
        marginLeft:5,
        marginRight: 5,
        borderRadius: 5,
        backgroundColor:'rgba(200,200,200,0.3)',
        color:'#1f92d4',
        borderWidth: 2, 
        height: 50,
        paddingTop: 15,
    },
    button: {
        height: 50,
    
    }


})