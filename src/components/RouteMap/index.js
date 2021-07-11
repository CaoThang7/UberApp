import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { View, Dimensions, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBZbjeg2q-L8MNWQ1Z9hQJ0Dg281G0vtzQ';

const RouteMap = (props) => {

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    };

    const destination = {
        latitude: 28.450127,
        longitude: -16.269045,
    };


    return (
        <MapView
            style={{ width: '100%', height: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                // strokeWidth={5}
                // strokeColor="black"
            />
        </MapView>
    );
};

export default RouteMap;