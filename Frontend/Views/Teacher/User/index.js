$('#navbar').load('/Components/NavBarSubUser/index.html')

const changePassword = (Password) => {
    fetch('/api/Users/changePassword', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Password, id: localStorage.getItem('userId') })
    })
        .then(resp => {
            $('#alert').html(`
                <div class="alert alert-success" role="alert">
                    Contraseña cambiada correctamente
                </div>
            `)

            $('#new_password').val('')
            $('#confirm_password').val('')

            setTimeout(() => {
                $('#alert').html(``)
            },5000)

        })
        .catch(err => {
            console.error(err);
            $('#alert').html(`
                <div class="alert alert-danger" role="alert">
                    Verifique si las contraseñas son iguales
                </div>
            `)
            setTimeout(() => {
                $('#alert').html(``)
            },5000)
        })
}

const setNewPassword = (e) => {
    e.preventDefault()
    const newPass = $('#new_password').val();
    const confirmPass = $('#confirm_password').val();

    if (newPass === confirmPass && newPass !== '' && confirmPass !== '') {
        changePassword(newPass)
    }
    else {
        $('#alert').html(`
            <div class="alert alert-danger" role="alert">
                Verifique si las contraseñas son iguales
            </div>
        `)
        setTimeout(() => {
            $('#alert').html(``)
        },5000)
    }

}

$(document).ready(() => {

    fetch(`/api/Users/getByID/${localStorage.getItem('userId')}`)
        .then(resp => resp.json())
        .then(resp => resp.result)
        .then(resp => {
            $('#Name').html(resp.Name)
            $('#Address').val(resp.Address);
            $('#DUI').val(resp.DUI);
            $('#Email').val(resp.Email);
            $('#Phone').val(resp.Phone)
        })

})

$('#changePassword').on('submit', setNewPassword)