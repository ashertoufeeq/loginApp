import React from 'react';
import { View, TextInput} from 'react-native';
import styles from './styles';

export class Login extends React.Component {
    render() {
        const {containerLogin,loginViewLogin,loginTextLogin}=styles;
        return (

            <View style={containerLogin}>
                <View style={loginViewLogin}>
                    <TextInput style={loginTextLogin} placeholder='USERNAME'/>
                </View>

                <View style={loginViewLogin}>
                    <TextInput style={loginTextLogin} secureTextEntry={true} placeholder='PASSWORD'/>
                </View>
            </View>
        );
    }
}

