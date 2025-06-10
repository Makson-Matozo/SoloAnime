import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0f1e',
    },
    scrollContainer: {
        padding: 24,
        alignItems: 'center',
    },
    icon: {
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        color: '#4dd0e1',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 16,
        letterSpacing: 1,
    },
    subTitle: {
        fontSize: 18,
        color: '#90caf9',
        marginTop: 30,
        marginBottom: 12,
        fontWeight: '600',
    },
    text: {
        fontSize: 16,
        color: '#cfd8dc',
        marginBottom: 14,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 10,
    },
    socialContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 15,
        marginTop: 10,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1c2533',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        width: '90%',
        maxWidth: 300,
        justifyContent: 'space-between',
        elevation: 3,
    },
    socialText: {
        color: '#e0e0e0',
        fontSize: 16,
        fontWeight: '500',
    },

});