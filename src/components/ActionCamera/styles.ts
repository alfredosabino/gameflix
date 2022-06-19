import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex:2
    },
    camera: {
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center" // Ajustar depois para flex-end
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    buttonTurn: {
        backgroundColor: "#ffffffa6",
        borderRadius: 75,
        width:50,
        height:50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        zIndex: 100,
    },
    buttonPic: {
        backgroundColor: "#ffffffa6",
        borderRadius: 75,
        width:50,
        height:50,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        zIndex: 100,
    },
    text: {
        color: theme.colors.secondary,
    }
})