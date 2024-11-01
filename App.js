import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Alert, Button, Image, ScrollView, Text, TextInput} from 'react-native';

const MyApp = () => {
    // const [answers, setAnswers] = React.useState('');
    // const correctAnswers = {Q1:'bee', Q2:'leopard',Q3:'penguin'}
    //
    // const handleAnswerChange = (question,value) => {
    //     setAnswers({...answers,[question]: value});
    // };
    //
    // const handleSubmit = () => {
    //     let score = 0;
    //     if (answers.Q1 === correctAnswers.Q1) score++;
    //     if (answers.Q2 === correctAnswers.Q2) score++;
    //     if (answers.Q3 === correctAnswers.Q3) score++;
    //
    //     Alert.alert(`You have ${score} correct answer(s)!`)
    // }

    const [name1, setName1] = React.useState('');
    const [name2, setName2] = React.useState('');
    const [name3, setName3] = React.useState('');

    return (
        <ScrollView contentContainerStyle={{paddingBottom: 20}}>
            <Text>User Name:</Text>
            <TextInput style={{borderWidth: 1}}/>

            <Image source={require('./img/bee.jpg')}/>
            <Text>Q1) What animal is this?</Text>
            <RNPickerSelect
                onValueChange={(value) => setName1(value)}
                items={[
                    {label: 'deer', value: 'deer'},
                    {label: 'bee', value: 'bee'},
                    {label: 'owl', value: 'owl'},
                ]}
            />

            <Image source={require('./img/leopard.jpg')}/>
            <Text>Q2) What animal is this?</Text>
            <RNPickerSelect
                onValueChange={(value) => setName2(value)}
                items={[
                    {label: 'leopard', value: 'leopard'},
                    {label: 'peacock', value: 'peacock'},
                    {label: 'turtle', value: 'turtle'},
                ]}
            />

            <Image source={require('./img/penguin.jpg')}/>
            <Text>Q3) What animal is this?</Text>
            <RNPickerSelect
                onValueChange={(value) => setName3(value)}
                items={[
                    {label: 'penguin', value: 'penguin'},
                    {label: 'zebra', value: 'zebra'},
                    {label: 'owl', value: 'owl'},
                ]}
            />


            <Button onPress={() => {
                const CorrectAns1 = 'bee';
                const CorrectAns2 = 'leopard';
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

                if (score >= 2) {
                    message = 'You have scored' + num + '' + 'out of 3! Well Done!';
                } else {
                    message = 'You have scored' + num + '' + 'out of 3! Better luck next time!';
                }

                Alert.alert(message);
            }
            } title="Submit Answers">
        </Button>

        </ScrollView>

    );
};

export default MyApp;
