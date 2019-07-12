import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import styles from './style'

const Header = () => (
    <ScrollView>
    <View  style = { styles.container }>
        {/* <Image source={require('./img/logo.png')}  style={ styles.Logo }/> */}
    <View>
        <Text style={ styles.Bold}>
        Lorem ipsum {"\n"}
        <Text style={ styles.Rosa }>dolor sit </Text> 
            amet
            </Text>
            <Text style={ styles.Light }>
            {"\n"}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
            </Text>
            <TextInput placeholder={'Digite seu e-mail'} style={ styles.Input }></TextInput>
            <Button title="Começar" color="#8F71FF"/>


             <Text style={ styles.Bold}>{"\n\n"}Selecione a sua dificuldade</Text>
             <Text style={ styles.Light }>{"\n"}A sua estante está cheia de livros?</Text>

             <View style={ styles.row }>
             <View style={ styles.item }> 
                    <View style={ styles.quadrado }>
                    <Image source={{uri: './img/escolha1.png'}}  style={{ width: 30, height: 30}}/>
                    <Text style={ styles.SemiBold }>{"\n"}Leio poucos livros</Text>
                    </View>
             </View>
             <View style={ styles.item }> 
                    <View style={ styles.quadrado }>
                    <Image ssource={{uri: './img/escolha2.png'}}  style={{ width: 30, height: 30}}/>
                    <Text style={ styles.SemiBold }>{"\n"}Leio poucos livros</Text>
                    </View>
             </View>
             </View>

    </View>
    </View>
    </ScrollView>
);
export default Header;