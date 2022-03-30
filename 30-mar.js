// subsequence
function subsequence(arr, index, curr) {

    if(index === arr.length) {
        console.log(curr);
        return;
    }

    subsequence(arr, index+1, curr); //exclusion
    curr.push(arr[index]); 
    subsequence(arr, index+1, curr); // inclusion
    curr.pop();
}

subsequence([1,2], 0, []);

// permutations of a string

function permute(chintu, str, lastInd) {

    if(chintu === lastInd) {
        console.log(str);
        return
    }
    for(let pintu=chintu;pintu<=lastInd;pintu++) {
        permute(chintu+1, swap(chintu, pintu, str), lastInd);
    }

}

permute(0, 'ABC', 2);

function swap(chintu, pintu, str) {
    let charArray = str.split("");
    let temp;

    temp = charArray[chintu];
    charArray[chintu] = charArray[pintu];
    charArray[pintu] = temp;

    return charArray.join("");
}