import React from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';

export default class App extends React.Component{
  render(){
      return (
        <ScrollView pagingEnabled= {true} horizontal = {true}>
            <View style = {styles.outer}>
              <Text style = {styles.innerText}>You have seen the First Screen</Text>
            </View>
            <View style = {[styles.outer, styles.outersecond]}>
              <Text style = {styles.innerText}>This one is Second</Text>
            </View>
            <View style = {[styles.outer, styles.outerthird]}>
              <Text style = {styles.innerText}>And this is the Third One</Text>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  outer:{
    backgroundColor:'#007bb6',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  innerText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  outersecond:{
    backgroundColor: '#dd4b39',
  },
  outerthird:{
    backgroundColor: '#422351',
  }
});