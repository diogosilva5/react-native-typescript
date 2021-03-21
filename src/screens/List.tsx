import React, { useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { todosActions, todosSelector, fetchUserById } from '../store/todos/todosSlice';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../components/button';

const List: React.FC = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector(todosSelector);

    useEffect(() => {
        dispatch(fetchUserById());
    }, []);

    return (
        <SafeAreaView style={{ backgroundColor: 'lightblue', flex: 1 }}>
            <View style={{ flex: 0.5, justifyContent: 'center', padding: 24 }}>
                {todos.map((item, index) => (
                    <View style={{ height: 20 }}>
                        <Text key={index} style={{ textAlign: 'center', fontSize: 32 }}>
                            {item.id} - {item.email}
                        </Text>
                    </View>
                ))}
            </View>
            <View style={{ flex: 0.5, justifyContent: 'space-around', padding: 24 }}>
                <Button
                    text="new todo"
                    onPress={() => dispatch(todosActions.newTodo({ id: 1, text: 'new stuff' }))}
                    color="primary"
                />
                <Button
                    text="delte todo"
                    onPress={() => dispatch(todosActions.deleteTodo(1))}
                    color="primary"
                />
            </View>
        </SafeAreaView>
    );
};

export default List;
