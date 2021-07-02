const $ = val => document.querySelector(val);

const getInformation = () => {
    return {
        user: $('#user').value,
        password: $('#password').value
    }
}

window.addEventListener('load', () => {
     
    $('#login').addEventListener('submit', e => {
        e.preventDefault();
        
        // const data = getInformation();
        window.location = '/management'
    })

})