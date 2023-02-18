function onSuccess(data) {
    console.log('success ', data);
}

function onFailure(error) {
    console.error(error);
}

function add(n1,n2,success, failed) {
    // if (typeof n1 ==='string') {
    //     failed("only numeric values")
    //     return;
    // }
    if (typeof n1 ==='string') {
        failed("only numeric values")
    }else{
        result = n1+n2;
        success(result);
    }
        
}

add(2,3,onSuccess,onFailure);