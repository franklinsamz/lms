import React from 'react'
import {FilterAppContainer} from './FilterApp';
import reducer from '../../reducers/users'
import {createStore} from 'redux';
import {userServices} from "../../services";
import {Provider} from 'react-redux';
const store = createStore(reducer)
function set_state(users) {
    store.dispatch ({
        type: 'SET_STATE',
        state: {

            filters: [
                {id: 'male', inuse: false },
                {id: 'female', inuse: false },
            ],
            searchfilter: [
                {id: 'search', inuse: false },
                {id: 'searchValue',inuse: '' },
            ],
            users: users
        }
    })
}


export class FilterAppMainContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ActionCompleted: []
        }
    }
    componentWillMount() {
          const self = this;
        var promiseObj = userServices.listuser();
        promiseObj.then(res => {
            let users =res.data;
            set_state((users))
            this.setState({
                ActionCompleted: 'Completed'
            });
        })
    }

    render() {

        if(!this.state.ActionCompleted.length)
            return null;
        return (

            <div>
                <Provider store={store}>
                    <FilterAppContainer />
                </Provider>

            </div>
        )};












}

export default FilterAppMainContainer;