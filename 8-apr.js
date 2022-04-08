// quick sort with last as pivot

function quickSort(arr, l, r) {
    if(l >= r)
        return;
    let p = partition(arr, l, r);
    quickSort(arr, l, p-1);
    quickSort(arr, p+1, r);
}

function partition(arr, l, r) {
    let pivot = arr[r];
    let karan = l;
    for(let arjun = l;arjun<=r-1;arjun++) {
        if(arr[arjun] < pivot) {
            swap(arr, karan, arjun);
            karan++;
        }
    }
    swap(arr, r, karan); // swapping with pivot
    return karan;
}

function swap(arr, l, r) {
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}
let arr = [8, 14, 2, 0, 5, 6];

quickSort(arr, 0, arr.length-1);
console.log(arr);