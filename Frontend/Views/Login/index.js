// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$ validation pass
const $ = val => document.querySelector(val);

const modal = $('#exampleModal');
var myModal = new bootstrap.Modal(modal, {
    keyboard: true
})


const getInformation = () => {
    return {
        email: $('#email').value,
        password: $('#password').value
    }
}

const __post = (rute, params) => {
    return fetch(rute, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then(resp => resp.json())
}

window.addEventListener('load', () => {

    $('#login').addEventListener('submit', e => {
        e.preventDefault();

        __post('/api/Users/SignIn', getInformation())
            .then(resp => {
                if (resp.token) {
                    localStorage.setItem('token', resp.token);
                    window.location = '/Management'
                }
                else {
                    myModal.show(modal);
                }
            })
            .catch(err => console.error(err));

    })

})