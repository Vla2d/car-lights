import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    applyText: {
        marginTop: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center', // Added to center the text horizontally
    },
    screenshot: {
        width: 300,
        height: 150,
        resizeMode: 'contain',
    },
    screenshotsContainer: {
        marginTop: 20,
        width: 300,
        flexGrow: 0,
        maxHeight: 150,
        overflow: 'scroll',
        flexDirection: 'column',
        alignItems: 'center', // Added to center child elements horizontally
    },
    logoContainer: {
        maxHeight: 200,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        width: 300,
        height: 250,
        resizeMode: 'contain',
    },
});

export default styles;