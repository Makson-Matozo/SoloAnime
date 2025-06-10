import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#0f1b2c',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: '#00bfff',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#1a2a3c',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        width: 90,
        height: 120,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    info: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    itemTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    score: {
        color: '#b0bec5',
        fontSize: 14,
    },

});