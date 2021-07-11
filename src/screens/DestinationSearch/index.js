import React, { useState, useEffect } from 'react';
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles.js';

const DestinationSearch = (props) => {
    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const checkNavigation = () => {
        console.warn('is call')
        if (originPlace && destinationPlace) {
            // navigation.navigate('SearchResults', {
            //     originPlace,
            //     destinationPlace,
            // })
            console.warn('hello bro')
        }
    }

    useEffect(() => {
        checkNavigation();
    }, [originPlace, destinationPlace]);
    return (
        <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder="Where from?"
                onPress={(data, details = null) => {
                    setOriginPlace({ data, details });
                    console.log(data, details);
                }}
                //   enablePoweredByContainer={false}
                //   suppressDefaultStyles
                //   currentLocation={true}
                //   currentLocationLabel='Current location'
                styles={{
                    textInput: styles.textInput,
                    container: styles.autocompleteContainer,
                    listView: styles.listView,
                    separator: styles.separator,
                }}
                fetchDetails
                query={{
                    key: 'AIzaSyBZbjeg2q-L8MNWQ1Z9hQJ0Dg281G0vtzQ',
                    language: 'en',
                }}
            //   renderRow={(data) => <PlaceRow data={data} />}
            //   renderDescription={(data) => data.description || data.vicinity}
            //   predefinedPlaces={[homePlace, workPlace]}
            />


            <GooglePlacesAutocomplete
                placeholder="Where to?"
                // onPress={(data, details = null) => {
                //     // 'details' is provided when fetchDetails = true
                //     console.log(data, details);
                //   }}
                onPress={(data, details = null) => {
                    setDestinationPlace({data, details});
                  }}
                //   enablePoweredByContainer={false}
                //   suppressDefaultStyles
                //   currentLocation={true}
                //   currentLocationLabel='Current location'
                styles={{
                    textInput: styles.textInput,
                    container: {
                      ...styles.autocompleteContainer,
                      top: 55,
                    },
                    separator: styles.separator,

                  }}
                fetchDetails
                query={{
                    key: 'AIzaSyBZbjeg2q-L8MNWQ1Z9hQJ0Dg281G0vtzQ',
                    language: 'en',
                }}
            //   renderRow={(data) => <PlaceRow data={data} />}
            //   renderDescription={(data) => data.description || data.vicinity}
            //   predefinedPlaces={[homePlace, workPlace]}
            />

        </View>
    );
};

export default DestinationSearch;