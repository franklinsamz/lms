import {Map} from 'immutable';

function getFilterIndex(state, itemId) {
    return state.get('filters').findIndex(
        (item) => item.get('id') === itemId
    );
}

function setState(state, newState) {

    return state.merge(newState);
}


function searchFilter(state, filter) {



    console.log(123);
    console.log(state);

    const updatedFilter1 = state.get('searchfilter')
        .get(0)
        .update('inuse', inuse =>  true);

    const updatedFilter2 = state.get('searchfilter')
        .get(1)
        .update('inuse', inuse =>  filter);


    state = state.update('searchfilter', filt =>
        filt.set(0, updatedFilter1)


    );
    state = state.update('searchfilter', filt =>
        filt.set(1, updatedFilter2)

    );


    return state
}


function changeFilter(state, filter) {
    const updatedFilter11 = state.get('searchfilter')
        .get(0)
        .update('inuse', inuse =>  false);
    const updatedFilter21 = state.get('searchfilter')
        .get(1)
        .update('inuse', inuse =>  '');
    state = state.update('searchfilter', filt =>
        filt.set(0, updatedFilter11)
    );
    state = state.update('searchfilter', filt =>
        filt.set(1, updatedFilter21)
    );
    let filterIndex = getFilterIndex(state, filter)
    const updatedFilter = state.get('filters')
        .get(filterIndex)
        .update('inuse', inuse => inuse === false);

    let old_index = (state.get('filters').findIndex(
        (item) => item.get('inuse') === true
    ));
    console.log('old_index');
    console.log(old_index);
    const updatedFilter1 = state.get('filters')
        .get(old_index)
        .update('inuse', inuse => inuse === true ? false : false);


    console.log('updatedFilter1');
    console.log(updatedFilter1);





    if (old_index != -1) {
        state= state.update('filters', filt =>
            filt.set(old_index, updatedFilter1)
                .set(filterIndex, updatedFilter)
        );
        return state
    }
    else {


        state=state.update('filters', filters => filters.set(filterIndex, updatedFilter));

        return  state
    }

}
export default function(state = Map(), action) {

    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'CHANGE_FILTER':
            return changeFilter(state, action.filter);
        case 'SEARCH_FILTER':
            return searchFilter(state, action.filter);
                default:
            return state
    }
}


