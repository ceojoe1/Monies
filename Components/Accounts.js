 import React, { Component } from 'react';
 import { AppRegistry, Text , TextInput, View, BackHandler, TouchableOpacity, Picker, StyleSheet, Image, Dimensions, Alert} from 'react-native';
 import { NavigationActions } from 'react-navigation';
import Form from '../Classes/Form.js';

class Accounts extends Component{

    

    render() {
      
        return(
        <View style={styles.container}>       

            <Text style={styles.header}> Update Accounts </Text>         
            {/*
                Display Date Form
                */}
                <Form
                    header="Due Date"
                    placeholder="Select a Date"
                    choice = "date"
                    />

                {/*
                    Display Subject Form
                */}
                <Form
                    header="Subject"
                    placeholder="Enter a Subject"
                    choice = "text"
                    />
            
                {/*
                    Display Amount Form
                */}
                <Form 
                    header="Amount" 
                    placeholder="Enter an Amount"
                    choice = "text"
                />

                {/*
                    Display Submit button 
                */}
                <Form 
                    header="SUBMIT"
                    namme = "Submit"
                    choice = "submit"
                />
            
        </View>
        )
    }
}

export default Accounts

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'black', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop:25
        
    },
   bgImgContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        resizeMode: 'contain'
    },
    header: {
        fontSize: 40,
        color: '#1f92d4'
    }

})