import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
    text: string;
    onPress: () => void;
    color?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ onPress, text, color = 'secondary' }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 48,
                backgroundColor: color === 'primary' ? 'blue' : 'red',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ fontSize: 20, color: 'white' }}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
