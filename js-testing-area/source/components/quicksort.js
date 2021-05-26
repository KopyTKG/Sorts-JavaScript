


//                     0    max - 1
function sort(array, left, right) {
    if(left < right) {

        let index = _innerSort(array, left, right);
        
        sort(array, left, index - 1);
        sort(array, index + 1, right);
    }
}






function _innerSort(array, left, right) {
    let pivot = array[right];
    let selected = left - 1;

    for (let i = left; i < right; i++) {

        if(array[i] <= pivot) {
            selected ++;
            swap(i, selected, array);
        }
    }
    swap(selected + 1, right, array);
    return selected + 1;
}



function swap(current, selected, array) {
    let temp = array[current];
    array[current] = array[selected];
    array[selected] = temp;
}







module.exports = {
    sort
}