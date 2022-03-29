// tiling problem
function noOfWays(n) {
    if(n==1 || n==2)
        return n;

    return noOfWays(n-1) + noOfWays(n-2);
}

console.log(noOfWays(2))


//count maze problem
function countMaze(m, n) {

    if(m === 1 || n === 1)
        return 1;


    return countMaze(m-1, n) + countMaze(m, n-1);
}

console.log(countMaze(2, 3))

// brackets problem
function printBrackets(open, close, n, str) {

    if(open+close === 2*n) {
        console.log(str);
        return;
    }
    if(open < n) {
        printBrackets(open+1, close, n, str+'(')
    }

    if(open > close) {
        printBrackets(open, close+1, n, str+')')
    }

}

printBrackets(0, 0, 2, '')

