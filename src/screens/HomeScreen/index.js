import React from 'react';
import { View, Dimensions, Text, ScrollView } from "react-native";

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';


const HomeScreen = (props) => {
    return (
        <ScrollView>
            <View>
                {/* goi screen HomeMap tu components */}
                <View style={{ height: Dimensions.get('window').height - 400 }}>
                    <HomeMap />
                </View>
                {/*  Covid Message tu components*/}
                <CovidMessage />
                {/*  Bottom Comp tu components */}
                <HomeSearch />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
