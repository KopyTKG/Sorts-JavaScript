function sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let index = 0; index < array.length - i; index++) {
            if(array[index] > array[index + 1]){
                let temp = array[index];
                array[index] = array[index + 1];
                array[index + 1] = temp;
            }
        }
    }
    return array;
}



module.exports = {
    sort
}