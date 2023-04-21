import { Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

const MenuOptions = ({ item }) => {
    return (
        <View style={styles.optionRow}>
            <MaterialCommunityIcons
                name={item.iconName}
                size={26}
                color="gray"
            />
            <Text style={styles.optionText}>{item.name}</Text>
            <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="gray"
                style={{ marginLeft: 'auto' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    optionRow: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center',
    },
    optionText: {
        color: '#eee',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
})

export default MenuOptions
