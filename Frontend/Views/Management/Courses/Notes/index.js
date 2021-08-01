$('#navbar').load('/Components/NavBar/index.html')
const ruteCurrent = window.location.toString().replace('//', '').split('/');
const searchElments = val => document.querySelectorAll(val);

const modal = $('#exampleModal');
var myModal = new bootstrap.Modal(modal, {
    keyboard: true
})

const getData = () => ({
    C1_L1: parseFloat($('#C1_L1').val()),
    C1_L2: parseFloat($('#C1_L2').val()),
    C1_P: parseFloat($('#C1_P').val()),
    C1_Note: parseFloat($('#C1_Note').val()),

    C2_L1: parseFloat($('#C2_L1').val()),
    C2_L2: parseFloat($('#C2_L2').val()),
    C2_P: parseFloat($('#C2_P').val()),
    C2_Note: parseFloat($('#C2_Note').val()),

    C3_L1: parseFloat($('#C3_L1').val()),
    C3_L2: parseFloat($('#C3_L2').val()),
    C3_P: parseFloat($('#C3_P').val()),
    C3_Note: parseFloat($('#C3_Note').val()),

    Rep: parseFloat($('#Rep').val()),
    Final: parseFloat($('#Final').val()),
})

const setData = (data) => {
    $('#C1_L1').val(data.C1_L1);
    $('#C1_L2').val(data.C1_L2);
    $('#C1_P').val(data.C1_P);
    $('#C1_Note').val(data.C1_Note);

    $('#C2_L1').val(data.C2_L1);
    $('#C2_L2').val(data.C2_L2);
    $('#C2_P').val(data.C2_P);
    $('#C2_Note').val(data.C2_Note);

    $('#C3_L1').val(data.C3_L1);
    $('#C3_L2').val(data.C3_L2);
    $('#C3_P').val(data.C3_P);
    $('#C3_Note').val(data.C3_Note);

    $('#Rep').val(data.Rep);
    $('#Final').val(data.Final);
}

const setNoteFinal = (notes) => {

    let sumNotes = parseFloat(notes.C1_Note) + parseFloat(notes.C2_Note) + parseFloat(notes.C3_Note);

    if (notes.Rep != 0) {
        sumNotes = ((sumNotes + parseFloat(notes.Rep)) / 4).toFixed(2) ;
    }
    else {
        sumNotes = (sumNotes / 3).toFixed(2)
    }

    setData({...notes, Final: sumNotes == 10 || sumNotes == 0 ? Math.round(sumNotes) : sumNotes})

}

const handleChangeComputo1 = () => {

    const Notes = getData();

    const C1_Note = ((Notes.C1_L1 + Notes.C1_L2 + Notes.C1_P) / 3).toFixed(2)

    setNoteFinal({...Notes, C1_Note: C1_Note == 10 || C1_Note == 0 ? Math.round(C1_Note) : C1_Note })

}

const handleChangeComputo2 = () => {

    const Notes = getData();

    const C2_Note = ((Notes.C2_L1 + Notes.C2_L2 + Notes.C2_P) / 3).toFixed(2)

    setNoteFinal({...Notes, C2_Note: C2_Note == 10 || C2_Note == 0 ? Math.round(C2_Note) : C2_Note })

}

const handleChangeComputo3 = () => {

    const Notes = getData();

    const C3_Note = ((Notes.C3_L1 + Notes.C3_L2 + Notes.C3_P) / 3).toFixed(2)

    setNoteFinal({...Notes, C3_Note: C3_Note == 10 || C3_Note == 0 ? Math.round(C3_Note) : C3_Note })

}

const handleChangeRep = () => setNoteFinal(getData())

searchElments('.computo-1').forEach(el => el.addEventListener('change', handleChangeComputo1));
searchElments('.computo-2').forEach(el => el.addEventListener('change', handleChangeComputo2));
searchElments('.computo-3').forEach(el => el.addEventListener('change', handleChangeComputo3));
$('#Rep').on('change', handleChangeRep)

$(document).ready(function () {
    fetch(`/api/Notes/getNotesById/${ruteCurrent[3]}`)
        .then(resp => resp.json())
        .then(resp => resp.result[0])
        .then(resp => {

            $('#title').html(`<u>${resp.Course}</u> / ${resp.Name}`);
            $('#C1_L1').val(resp.C1_L1);
            $('#C1_L2').val(resp.C1_L2);
            $('#C1_P').val(resp.C1_P);
            $('#C1_Note').val(resp.C1_Note);

            $('#C2_L1').val(resp.C2_L1);
            $('#C2_L2').val(resp.C2_L2);
            $('#C2_P').val(resp.C2_P);
            $('#C2_Note').val(resp.C2_Note);

            $('#C3_L1').val(resp.C3_L1);
            $('#C3_L2').val(resp.C3_L2);
            $('#C3_P').val(resp.C3_P);
            $('#C3_Note').val(resp.C3_Note);

            $('#Rep').val(resp.Rep);
            $('#Final').val(resp.Final);

        })
})

$('#cancel').on('click', () => window.location = `/Management/Courses/${ruteCurrent[4]}/Information` )

$('#submit').on('click', () => {
    const notes = {...getData(), idNotes: ruteCurrent[3] };

    fetch('/api/Notes/updateNotes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notes)
    })
        .then(() => window.location = `/Management/Courses/${ruteCurrent[4]}/Information`)
        .catch(err => console.error(err))

})

$('#delete').on('click', () => myModal.show(modal))

$('#ok').on('click', () => {
    fetch(`/api/Notes/deleteNotes/${ruteCurrent[3]}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => window.location = `/Management/Courses/${ruteCurrent[4]}/Information`)
        .catch(err => console.error(err))
})