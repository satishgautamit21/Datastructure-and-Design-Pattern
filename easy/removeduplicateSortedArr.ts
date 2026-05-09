function removeDuplicatesSortedArr(arr: number[]): number[] | any{
    let i = 0;
    let j = 1;

    while(j<arr.length){
        if(arr[i]!==arr[j]){
            
            i++;
            arr[i] = arr[j]
        }
        j++;
    }
    arr.length = i+1;
    return arr;
}

console.log('arr without duplicate', removeDuplicatesSortedArr([1,2,2,3,3,3,4,5,5,6,77]))