import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Alert, Button, Image, ScrollView, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,
        backgroundColor: '#EFEFEF', // softer gray background
    },
    header: {
        backgroundColor: '#4A90E2', // a nice blue color
        paddingVertical: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    },
    headerText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    quizContainer: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 8
    },
    image: {
        width: '100%',
        height: 145,
        borderRadius: 15,
        resizeMode: 'cover',
        marginVertical: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#4A90E2',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});
const QuizApp = () => {

    const [name1, setName1] = React.useState('');
    const [name2, setName2] = React.useState('');
    const [name3, setName3] = React.useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>🐾Animal Quiz</Text>
            </View>

            <View style={styles.quizContainer}>
                <Image
                    key="bee"
                    source={require('./img/bee.jpg')}
                    style={styles.image}
                />
                <Text>1. What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setName1(value)}
                    items={[
                        { label: 'bee', value: 'bee' },
                        { label: 'deer', value: 'deer' },
                        { label: 'owl', value: 'owl' }
                    ]}
                />

                <Image
                    key="tiger"
                    source={require('./img/tiger.jpg')}
                    style={styles.image}
                />
                <Text>2. What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setName2(value)}
                    items={[
                        { label: 'tiger', value: 'tiger' },
                        { label: 'turtle', value: 'turtle' },
                        { label: 'peacock', value: 'peacock' }
                    ]}
                />

                <Image
                    key="penguin"
                    source={require('./img/penguin.jpg')}
                    style={styles.image}
                />
                <Text>3. What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setName3(value)}
                    items={[
                        { label: 'penguin', value: 'penguin' },
                        { label: 'zebra', value: 'zebra' },
                        { label: 'owl', value: 'owl' }
                    ]}
                />

                <Button onPress={() => {
                    const CorrectAns1 = 'bee';
                    const CorrectAns2 = 'tiger';
                    const CorrectAns3 = 'penguin';
                    let num = 0;
                    let score = 0;
                    let message = '';

                    if (name1 === CorrectAns1) {
                        score += 1;
                        num += 1;
                    }

                    if (name2 === CorrectAns2) {
                        score += 1;
                        num += 1;
                    }

                    if (name3 === CorrectAns3) {
                        score += 1;
                        num += 1;
                    }

                    if (score === 3) {
                        message = `You have scored ${num} out of 3! Excellent work! You’re an animal expert! 🥇`;
                    } else if (score === 2) {
                        message = `You have scored ${num} out of 3! Great job! Just a little more practice.. 👍`;
                    } else if (score === 1) {
                        message = `You have scored ${num} out of 3. Not bad, keep learning and you’ll get there! 😊`;
                    } else {
                        message = `You have scored ${num} out of 3... don't worry, try again and you’ll nail it! 🐢`;
                    }

                    Alert.alert(message);
                }} title="Submit Answers" />
            </View>
        </ScrollView>
    );
};

export default QuizApp;
