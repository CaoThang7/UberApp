import React, { useState } from 'react';
import { View, Image, Text, Pressable } from "react-native";
import styles from './styles.js';
import Ionicons from "react-native-vector-icons/Ionicons";

const UberTypesRow = (props) => {
    const { type, onPress, isSelected } = props;
    //Tao mot ham getImage()
    const getImage = () => {
        //Neu type tim den types(trong assets data) = ten cua cac loai xe thi se set image cua tung xe 
        if (type.type === 'UberX') {
            return require('../../assets/images/UberX.jpeg');
        }
        if (type.type === 'Comfort') {
            return require('../../assets/images/Comfort.jpeg');
        }
        return require('../../assets/images/UberXL.jpeg');
    }
    return (
        <Pressable
            style={[styles.container, {
                backgroundColor: isSelected ? '#efefef' : 'white',
            }]}
        >

            {/*  Image */}
            <Image
                style={styles.image}
                //Goi ham getImage()
                source={getImage()}
            />
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type}{' '}
                    <Ionicons name={'person'} size={16} />
                    3
                </Text>
                <Text style={styles.time}>
                    8:03PM drop off
                </Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
                {/* Goi du lieu price tu UberTypes */}
                <Text style={styles.price}>est. ${type.price}</Text>
            </View>
        </Pressable>
    );
};

export default UberTypesRow;