
const $All = val => document.querySelectorAll(val);
const rute = window.location.toString().replace('//', '').split('/')[2];
const items = $All('.list-group-item');

switch (rute) {
    case "Courses":
        items[0].className += " active"
        break;
    case "Profile":
        items[1].className += " active"
        break;
    default:
        break;
}

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', ({ target: { dataset } }) => window.location = `/${localStorage.getItem('user')}/${dataset.rute}`)
}

document.getElementById('sign-out').addEventListener('click', () => window.location = '/login')