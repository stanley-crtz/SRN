$('#navbar').load('/Components/NavBar/index.html')

const modal = $('#exampleModal');
var myModal = new bootstrap.Modal(modal, {
    keyboard: false,
    backdrop: 'static'
})

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function getData() {
    return {
        name: $('#name').val(),
        dui: $('#dui').val(),
        address: $('#address').val(),
        phone: $('#phone').val(),
        email: $('#email').val(),
        password: generatePassword()
    }
}

const initLocation = () => {
    window.location = '/Management/Teachers'
}

$('#cancel').on('click', initLocation)

$('#teacher-info').on('submit', e => {
    e.preventDefault();

    const data = getData();

    fetch('/api/Teachers/Create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json())
        .then(resp => {
            $('#show-password').html(`<p>La contraseña generada por el sistema para el docente <strong>${data.name}</strong> es: <strong>${data.password}</strong> </p>`)
            myModal.show(modal)
        })
        .catch(err => console.error(err))
})

$('#ok').on('click', initLocation)