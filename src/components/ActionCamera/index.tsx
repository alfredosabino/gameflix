import React, { useEffect, useRef, useState } from "react";
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { styles } from "./styles";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export function ActionCamera() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const ref = useRef(null)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    const _takePhoto = async () => {
        const photo = await ref.current.takePictureAsync(); // Ajustar o parametro
        console.debug(photo)
    }

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <Text>Sem acesso a camera.</Text>
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <TouchableOpacity
                    style={styles.buttonTurn}
                    onPress={() => {
                        setType(type === CameraType.back ? CameraType.front : CameraType.back)
                    }}>
                    <Text style={styles.text}>
                        <AntDesign name="retweet" size={24} />
                        </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonPic}
                    onPress={_takePhoto}>
                    <Text style={styles.text}>
                        <MaterialIcons name="photo-camera" size={24} />    
                    </Text>
                </TouchableOpacity>
            </Camera>
        </View>
    )
}