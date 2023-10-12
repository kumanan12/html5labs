function addUsingPromise(n1, n2) {
    return new Promise(function(resolve, reject) {
        if (typeof n1 === 'string' || typeof n2 === 'string') {
            reject('only numeric values');
        } 
        let result = n1 + n2;
        resolve(result);
    });
}

async function addUsingAsync(n1, n2) {
    let result = await addUsingPromise(n1, n2);
    return result;
}

async function main() {
    let result = await addUsingAsync(2, 3);
    console.log(result);
}

main();