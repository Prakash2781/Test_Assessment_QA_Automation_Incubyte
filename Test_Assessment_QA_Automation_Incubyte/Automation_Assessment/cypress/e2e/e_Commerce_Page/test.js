//    Input : {4,5,6,-8,0,-6,7,-3,0,9,-5}, 
// Output: {0,0,4,5,6,-8,-6,7,-3,9,-5}

function test(arr){
    let result1 = []
    let result2 = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 0){
            result1.push(arr[i])
        }
        if(!arr[i]==0){
            result2.push(arr[i])
        }
    }

    console.log([...result1, ...result2])
}
test([4,5,6,-8,0,-6,7,-3,0,9,-5]) 