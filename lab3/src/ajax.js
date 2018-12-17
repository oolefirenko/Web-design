var submitButton = document.getElementById('send');
var clearButton = document.getElementById('clear');
var textingEditor = document.getElementById('text');

submitButton.addEventListener('click', function() {
    var textData = textingEditor.value;

    var elem = {
      data: textData,
    };

    fetch('send', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(elem),
    })
    .catch(error => console.log(error));
    var textData = textingEditor.value;
});

clearButton.addEventListener('click', function() {
    var elem = {
      data: "",
    };

    fetch('send', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(elem),
    })
    .catch(error => console.log(error));

    textingEditor.value = '';
});

document.addEventListener("DOMContentLoaded", function(event) {
    fetch('text.json')
    .then(data => {
      return data.json();
    })
    .then(data => {
        textingEditor.value = data.data;
    })
    .catch(error => console.log(error));
});
