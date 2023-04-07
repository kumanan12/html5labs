function printValues(e) {
    console.log('button click handler');
    const myForm = document.getElementById("mainForm");
    const data = new FormData(e.target);
    for (var pair of data.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
}