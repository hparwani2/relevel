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