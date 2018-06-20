import React from 'react'
import {FilterAppContainer} from './FilterApp';
import reducer from '../../reducers'
import {createStore} from 'redux';
import {User} from "../../services";
import axios from 'axios';
import {Provider} from 'react-redux';
import {userServices} from "../../services";
const store = createStore(reducer)


function get_campgrounds(features) {

    let campgrounds = []

    features.forEach(feature => {
        campgrounds.push({
            'title' : feature['content_name'],
            'description' : feature['description'],
            'position' :feature['description'],
            'properties': feature['properties'],
            'image': feature['image'],
            'url': "https://lmsv2.labsls.com/beta/logo/"

        })
    });


    return campgrounds
}


function set_state(campgrounds) {
    store.dispatch ({
        type: 'SET_STATE',
        state: {

            filters: [
                {id: 'Mandalay', inuse: false },
                {id: 'Yangon', inuse: false },
            ],
            searchfilter: [
                {id: 'search', inuse: false },
                {id: 'searchValue',inuse: '' },
            ],
            markers: campgrounds,
            campgrounds: campgrounds
        }
    })
console.log('set_state');
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
            let features =res.data.features;
            console.log(features)
            set_state(get_campgrounds(features))

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