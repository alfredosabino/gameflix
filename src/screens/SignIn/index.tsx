import React, { useState } from 'react'
import { View, Text, Image, StatusBar, Button } from 'react-native'
import IllustrationsImg from '../../assets/illustration.png'
import { ActionCamera } from '../../components/ActionCamera'
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'

export function SignIn () {
    return(
        <View style={styles.container}>
            <StatusBar 
            barStyle="light-content"
            backgroundColor="transparent"
            translucent/>
            <Image 
            source={IllustrationsImg} 
            style={styles.image}
            resizeMode='stretch'/>

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas {'\n'}
                    jogatinas
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>
                <ActionCamera></ActionCamera>
                <ButtonIcon title='Entrar com o Discord' activeOpacity={0.7} />
                <ButtonIcon title='Acesso a camera' activeOpacity={0.7} />
            </View>
        </View>
    )
}