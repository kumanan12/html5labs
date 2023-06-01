let store = {
    customerName : 'Kumanan',
    qty : 10
};

function reducer(value){
    return {...store, qty:value}
}

function action(value) {
    store = reducer(value);
}

function onButtonClicked(){
    let quantity = document.getElementById("qty").value;
    action(quantity);
    document.getElementById("items").innerText= store.qty;
}

document.getElementById("items").innerText = store.qty;
