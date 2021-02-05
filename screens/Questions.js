import React, { useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

import questions from '../data/data';
import List from './List'


const ShowQuestions = ({items}) => {
    const [index, setIndex] = useState(0)
    const {text} = questions[index]

    const checkNumber = (number) => {
        if (number > questions.length - 1) {
            return 0
        }
        if (number < 0) {
            return questions.length - 1
        }
        return number
    }

    const randomQuestions = () => {
        let randomNumber = Math.floor(Math.random() * questions.length) 
        if (randomNumber === index){
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <h3>{text}</h3>
                {/* here is where i want to display the player */}
                {items && items.map((item, index) => {
                    return (
                        <p 
                            key={index}>{item}
                        </p>
                    )
                })}
            </View>
                <Button
                    onPress={randomQuestions}
                    title="Siguiente"
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ede6e6',
        borderRadius: 4,
        padding: 12,
        margin: 30
    },
    card: {
        textAlign: 'center',
    }
})
export default ShowQuestions