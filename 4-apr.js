// second maximum salary.
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