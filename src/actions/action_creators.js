export function changeFilter(filter) {

    return {

        type: 'CHANGE_FILTER',
        filter
    }
}




export function searchFilter(filter) {
    return {
        type: 'SEARCH_FILTER',
        filter
    }
}
