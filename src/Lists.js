import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import { listActions } from "./redux/listSlice";
export default function Lists() {
    const dispatch = useDispatch();
    const list = useSelector(state => state.list);

    function onClearHandler() {
        dispatch(listActions.clearList());
    }
    console.log(list);
    return (
        <div className = 'lists'>
            <Button onClick = {onClearHandler} className = 'clear-all'>Clear All</Button>
            {list.map(listItem => <List id = {listItem.id} item = {listItem.item} isRenaming = {listItem.isRenaming} key = {listItem.id}/>)}
        </div>
    );
}