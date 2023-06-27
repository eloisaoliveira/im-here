import { Text, TextInput, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function Home() {

    function handleParticipantAdd(){
        console.log("Você clicou no botaão de Adicionar!");
    }

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
            
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}