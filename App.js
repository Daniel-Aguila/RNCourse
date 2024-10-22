import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals,setGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setGoals(currentCourseGoals =>[...goals, {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setGoals(currentCourseGoals => {
      //returns currentCourseGoals list except where the return gives false
      return currentCourseGoals.filter((goal) => goal.id !== id);
      });
  }

  //FlatList is a more efficient way to do scrollview for large list because it only renders what it needs
  //We give it the data that it will work with and the provide a arrow function to define how to style it
  //itemData is not just 'goal' because it provides metaData
  //itemData has itemData.index and itemData.item the itemData.item is the actual item like 'goal'

  // (coniditon [&& means if condition] do action)
  // so if the modal is Visible we put the GoalInput
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}/>
      {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal = {addGoalHandler} onCancel={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} 
          id = {itemData.item.id}
          onDeleteItem={deleteGoalHandler}/>;
        }}
        //If we don't set up our own object with 'key' property (we are setting it up as id)
        //Or if we are working with an API we can set up the key like this.
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },
  goalsContainer: {
    marginTop: 16,
  }
}); 