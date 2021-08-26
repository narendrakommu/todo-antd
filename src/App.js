import { Button, Input } from 'antd';
import Lists from './Lists';
import './App.scss';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from 'react-redux';
import {listActions} from './redux/listSlice';

function App() {
  const list = useSelector(state => state.list);
  let userInput = useSelector(state => state.userInput);
  const dispatch = useDispatch();
  // let todoItem = '';
  // console.log(list, userInput); 
  function onSubmitHandler() {
    if(userInput.trim() !== '') {
    var id;
     if(list.length === 0) {
       id = 1;
     }
     else {
       id = list[list.length - 1].id + 1;
     }
     dispatch(listActions.addListItem({item : userInput , id, isRenaming : false}));
     dispatch(listActions.userInputField(''))
    }
  }
  
  return (
    <div className="app">
       <div className = 'user-input'>
         <Input onChange = {e => { dispatch(listActions.userInputField(e.target.value)) }} value = {userInput} style = {{width: '60%', fontSize: '16px', paddingLeft: '25px', borderRadius: '20px'}} />
         <Button onClick = {onSubmitHandler}>Submit</Button>
       </div>
       {list.length === 0 ? null : <Lists />}
    </div>
  );
}

export default App;
