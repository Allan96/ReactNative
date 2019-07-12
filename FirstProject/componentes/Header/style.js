import { Platform, StyleSheet, Text, View } from 'react-native';
const styles = StyleSheet.create({
    container: {
        margin: 32,
    },
    TextoLogo: {
        fontFamily: 'OpenSans-Bold',
    },
    Logo: {
        resizeMode: 'contain',
        marginBottom: 48
    },
    Rosa: {
        color: '#FF5D9E',
    },
    Light: {
        color: 'black',
        fontFamily: 'OpenSans-Regular',
    },
    Bold: {
        color: 'black',
        fontFamily: 'OpenSans-Bold',
        fontSize: 24
    },
    SemiBold: {
        color: 'black',
        fontFamily: 'OpenSans-Semibold',
        fontSize: 12,
        textAlign: 'center'
    },
    Input: {
        marginTop: 50,
        marginBottom: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    item: {
        width: '50%',
    },
    quadrado: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginTop: 16,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        height: 120,
    }

});

export default styles;