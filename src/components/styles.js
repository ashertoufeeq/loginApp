import {StyleSheet} from 'react-native';



export default StyleSheet.create({
    containerApp: {
        flex: 1,
        backgroundColor: '#444',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTextApp:{margin:20,
        fontSize:35,
        fontWeight:'bold',
        color:"#fff",
        textAlign: 'center',
    },
    loginViewApp:{
        flex:1,
    },
    containerLogin: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginViewLogin: {

        padding: 10,
        height:50,
        width:350,
        backgroundColor:'#fff',
        borderWidth: .3,
        borderRadius: 30,
        borderColor:'#000',
        justifyContent: 'center',
        margin:1
    },
    loginTextLogin: {
        fontSize: 20,
    }


});
