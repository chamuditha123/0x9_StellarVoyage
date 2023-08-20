import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import CommonView from './CommonView';
import {common} from '../config/style';
import {PricingCard} from '../components/PricingCard/PricingCard';

const FlightSearchList = ({route, navigation}) => {
    const {flightList} = route.params;

    const flightHandler = (item: FlightInfo) => {
        navigation.navigate('Checkout', {
            flight: item
        });
    }

    const renderItem = (item: FlightInfo) => (
        <TouchableOpacity onPress={flightHandler}>
            <PricingCard flightId={item.flightId} from={item.from}
                         to={item.to} departureDate={item.departureDate} arrivalDate={item.arrivalDate}
                         returnDate={item.returnDate} travelMode={item.travelMode}
                         flightMode={item.flightMode} price={item.price}/>
        </TouchableOpacity>
    );

    return (
        <CommonView>
            <View style={[common.middleArea, common.topArea]}>
                <Text style={[common.mainTitle, {color: 'white', marginBottom: 12}]}>Search</Text>
            </View>
            <View>
                <FlatList
                    data={flightList}
                    renderItem={({item}) => renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </CommonView>
    );
};

export default FlightSearchList;