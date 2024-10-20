import './App.css'
import Counter from './Counter'
import Users from './Users'

function App() {
  
function handleClicked(){
  alert('button Clicked')
}
function addToFive(num){
  alert(num+5)
}
  return (
    <>
      
      <h1>React Core concept</h1>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClicked}>Click Me</button>
      <button onClick={function handleClicked(){
                  alert('button Clicked')
                }}>Click 02</button>
      <button onClick={() => {alert('3rd Click')}}>Click 03</button>
      <button onClick={() => addToFive(6)}>Add 5</button>
     
      
    </>
  )
}

export default App
