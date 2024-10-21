import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals,setGoals] = useState([]);

  function addGoalHandler(enteredGoalText){
    setGoals(currentCourseGoals =>[...goals, {text: enteredGoalText, id: Math.random().toString()}
    ]);
  };

  //FlatList is a more efficient way to do scrollview for large list because it only renders what it needs
  //We give it the data that it will work with and the provide a arrow function to define how to style it
  //itemData is not just 'goal' because it provides metaData
  //itemData has itemData.index and itemData.item the itemData.item is the actual item like 'goal'

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal = {addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text}/>;
        }}
        //If we don't set up our own object with 'key' property (we are setting it up as id)
        //Or if we are working with an API we can set up the key like this.
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    marginTop: 16,
  }
}); 