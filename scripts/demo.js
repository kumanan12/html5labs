// Get the button and content elements
var button = document.getElementById('update-button');
var content = document.getElementById('content');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Open a connection to the server
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);

    // Send the request
    xhr.send();

    // Handle the response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Update the content element with the new content
            content.innerHTML = xhr.responseText;
        }
    };
});
