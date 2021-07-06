
const $All = val => document.querySelectorAll(val);
const rute = window.location.toString().replace('http://localhost:4000/', '').split('/')[1];
const items = $All('.list-group-item');

switch (rute) {
    case "Asignaturas":
        // console.log($All('.list-group-item'))
        items[0].className += " active"
        break;

    default:
        break;
}

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', ({ target: { dataset } }) => window.location = `/Management/${dataset.rute}`)
}