import React, { useState } from 'react';
import { View, Text, Pressable } from "react-native";
import styles from './styles.js';
import UberTypeRow from '../UberTypeRow/index.js';

import typesData from '../../assets/data/types';

const UberTypes = ({ typeState, onSubmit }) => {
    // const [selectedType, setSelectedType] = typeState;
    const onSubmitt =()=>{
        console.warn("confirm")
    }
    return (
        <View >
            {/* Tim du lieu tu typesData */}
            {typesData.map((type) => (<UberTypeRow type={type} />))}
            <Pressable onPress={onSubmitt} style={{
                backgroundColor: 'black',
                padding: 10,
                margin: 10,
                alignItems: 'center',
            }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Confirm Uber
                </Text>
            </Pressable>

        </View>
    );
};

export default UberTypes;