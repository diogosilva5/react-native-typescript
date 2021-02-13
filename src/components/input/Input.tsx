import React from 'react';
import { View, TextInput, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';

interface InputProps {
    placeholder: string;
    onChange: (note: string) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
    const handleText = (e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
        onChange(e.nativeEvent.text);
    };

    return (
        <View style={{ height: 100 }}>
            <TextInput placeholder={placeholder} onChange={handleText} />
        </View>
    );
};

export default Input;
