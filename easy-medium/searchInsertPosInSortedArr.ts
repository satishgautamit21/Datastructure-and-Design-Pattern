/*
    Here we look if target is found anywhere in the arr. if it present
    we can return mid but here question say found the insert position
    means it may not be present so there could be chance it would fit at 0th
    or last position. So in such case there could be scenario like
    start cross end i.e. start > end at the end. So at the completion of while
    loop arr[start] > arr[end] hence start is returned at end  
*/

function searchInsertPos(arr: number[], target: number){
    let start = 0;
    let end = arr.length -1;
    while(start<=end){
        const mid = Math.floor((start+end)/2);
        if(target === arr[mid]) return mid;
        if(arr[mid] > target) end = mid -1 ;
        else start = mid+1;
    }
    return start;
}

console.log('searchInsertPos is ', searchInsertPos([1,3,4, 5,7,9], 5));
