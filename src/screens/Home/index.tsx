import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 30 de Junho de 2023
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Nome do participante'
                placeholderTextColor='#6B6B6B'
            />
        </View>
    )
}