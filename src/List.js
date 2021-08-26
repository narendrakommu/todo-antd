import { Button, Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { listActions } from "./redux/listSlice";

export default function List({id, item, isRenaming}) {
    const { Text } = Typography;
    const dispatch = useDispatch();
    // const {isRenaming} = useSelector(state => state.list);
    let {newInput} = useSelector(state => state);
    // let newItem = '';
    
    function onChangeHandler() {
        // console.log(id, 'dd');
        dispatch(listActions.changeListItem(id));
    }

    function onDeleteListItem() {
        dispatch(listActions.removeListItem(id));
    }

    function onSubmitHandler() {
        dispatch(listActions.renameListItem({id, item : newInput}));
        dispatch(listActions.userNewInputField(''));
        dispatch(listActions.ItemChanged(id));
    }
 
    // console.log(id);
    return (
        <div className = 'list'>
            <div className = 'list-text'>
                <Text className = 'row-no'>{id}</Text>
                <Text className = 'list-description'>{item}</Text>
            </div>
            <div className = 'list-button'>
                <Button className = 'change-name' onClick = {onChangeHandler}>Change Item</Button>
                <Button onClick = {onDeleteListItem}>Delete</Button>
            </div>
            {isRenaming ? <div className = 'rename'> 
                <Text>Please Change the Todo Item below</Text>
                <Input value = {newInput} onChange = {e => { dispatch(listActions.userNewInputField(e.target.value)) }} style = {{width: '80%', fontSize: '16px', paddingLeft: '25px', borderRadius: '5px', marginRight : '15px'}}/>
                <Button onClick = {onSubmitHandler}>Submit</Button>
            </div> : null}
        </div>
    );
}