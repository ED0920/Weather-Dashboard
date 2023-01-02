
// let date0El = document.getElementById('date0');
// let date1El = document.getElementById('date1');
// let date2El = document.getElementById('date2');
// let date3El = document.getElementById('date3');
// let date4El = document.getElementById('date4');
// let date5El = document.getElementById('date5');

const currentD = new Date();

for (let i = 0; i < 6; i++) {
    const date = new Date();
    date.setDate(currentD.getDate() + i)
    document.getElementById("date"+i).innerHTML = date.toLocaleDateString();
}

var requestUrl = "https://jsonplaceholder.typicode.com/posts";

const data = { username: 'example'};

fetch(requestUrl, {
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
})
    .then (res => {
        if (res.ok) {
            console.log('Success')
        } else {
            console.log('Not Successful')
        }
        return res.json()
        })
    .then(data => console.log(data))
    .catch(error => console.log('Error')
)