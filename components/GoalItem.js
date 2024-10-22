import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
            <View style={styles.goalItem}>
                <Pressable 
                //android_ripple and style (for ios) is basically when you press on it, it has a ripple effect
                android_ripple={{color: '#210644'}}
                //bind lets you pre-configure a function for future execution
                onPress={props.onDeleteItem.bind(this, props.id)}
                //we use a deconstructor from Pressable that allows us to take the pressed property
                style = {({pressed}) => pressed && styles.pressedItem}
                >
                <Text style={styles.goalText}>{props.text}</Text>
                </Pressable>
            </View>
        );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        flex: 1,
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5
      },    
      goalText: {
        color: 'white',
        padding: 8,
      }
});