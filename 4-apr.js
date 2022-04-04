// // second maximum salary.
let employees = [
    {
        name: 'babu',
        salary: 25000
    },
    {
        name: 'bahubali',
        salary: 86000
    },
    {
        name: 'puspaa',
        salary: 100000
    },
    {
        name: 'Nobita',
        salary: 1000
    }
]

console.log(bubbleSort(employees, employees.length, 3))

function bubbleSort(arr, n, k) {
    for(let i=0;i<k;i++) { 
        for(let j=0;j<n-i-1;j++) {
            if(arr[j].salary > arr[j+1].salary) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr[n-k];
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// insertion sort
function insertionSort(arr, n) {


    for(let i=1;i<n;i++) {
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}
console.log(insertionSort([1,4,7,8,2], 5))