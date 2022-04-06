function merge(arr1, arr2) {
    let result = new Array(arr1.length + arr2.length);

    let karan = 0;
    let arjun = 0;

    while(karan < arr1.length && arjun < arr2.length) {
        if(arr1[karan] < arr2[arjun]) {
            result.push(arr1[karan]);
            karan++;
        } else {
            result.push(arr2[arjun]);
            arjun++;
        }
    }

    while(karan < arr1.length) {
        result.push(arr1[karan]);
        karan++;
    }

    while(arjun < arr2.length) {
        result.push(arr2[arjun]);
        arjun++;
    }
    return result;
}
console.log(merge([3,5,7,19], [1,2,6,20]))


// merge sort
function mergeSort(arr, start, end) {

    if(start === end)
        return;
    let mid = parseInt((start+end)/2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    merger(arr, start, mid, end);
}

function merger(arr, start, mid, end) {
    let arr1 = [];
    let arr2 = [];

    for(let i=start;i<=mid;i++) {
        arr1.push(arr[i]);
    }
    for(let i=mid+1;i<=end;i++) {
        arr2.push(arr[i]);
    }

    let k=start;
    let karan = 0;
    let arjun = 0;
    while(karan < arr1.length && arjun < arr2.length) {
        if(arr1[karan] <= arr2[arjun]) {
            arr[k] = arr1[karan]
            karan++;
        } else {
            arr[k] = arr2[arjun];
            arjun++;
        }
        k++;
    }

    while(karan < arr1.length) {
        arr[k] = arr1[karan];
        karan++;
        k++;
    }

    while(arjun < arr2.length) {
        arr[k] = arr2[arjun];
        arjun++;
        k++;
    }
}

let array = [14,33,27,10,35,19,42,44];
mergeSort(array, 0, array.length-1);
console.log(array);
