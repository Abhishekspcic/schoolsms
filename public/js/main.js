const numberInput = document.getElementById('number'),
    textInput = document.getElementById('msg'),
    button = document.getElementById('button'),
    response = document.querySelector('.response');

  //checkin button clicked
button.addEventListener('click', send, false);

function send(){
    const number = numberInput.Value.replace(/\D/g, '');
    const text = textInput.value;

    fetch('/', {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        
        body: JSON.stringify({number: number , text: text})
    })
    .then(function(res){
        console.log(res);
        console.log('hurray');

    })
    .catch(function(err){
        console.log(err);
    });
}