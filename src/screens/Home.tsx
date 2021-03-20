import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { counterActions, counterSelector } from '../store/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/button';

const Home: React.FC = ({ navigation }) => {
    const dispatch = useDispatch();
    const { value } = useSelector(counterSelector);

    return (
        <SafeAreaView style={{ backgroundColor: 'lightblue', flex: 1 }}>
            <View style={{ flex: 0.5, justifyContent: 'center', padding: 24 }}>
                <Text style={{ textAlign: 'center', fontSize: 32 }}>{value}</Text>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'space-around', padding: 24 }}>
                <Button
                    text="increase"
                    onPress={() => dispatch(counterActions.increaseCounter())}
                    color="primary"
                />
                <Button
                    text="decrease"
                    onPress={() => dispatch(counterActions.decreaseCounter())}
                    color="primary"
                />
                <Button
                    text="increase amount"
                    onPress={() => dispatch(counterActions.increaseAmount(5))}
                    color="primary"
                />
                <Button text="next" onPress={() => navigation.navigate('List')} color="primary" />
            </View>
        </SafeAreaView>
    );
};

export default Home;
