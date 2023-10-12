function onSuccess(data) {
    console.log('success ', data);
}

function onFailure(error) {
    console.error('Failed ', error);
}

function add(n1,n2,success, failed) {
    let result;
    if (typeof n1 ==='string' || typeof n2 ==='string') {
        failed("only numeric values")
    }else{
        result = n1+n2;
        success(result);
    }
        
}

add(2,3,onSuccess,onFailure);
add('2',3,onSuccess,onFailure);