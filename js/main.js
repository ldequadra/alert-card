const button = document.getElementById('button');

const closeButtonSuccess = document.getElementById('close-button-success');
const closeButtonDanger = document.getElementById('close-button-danger');

const successCard = document.getElementById('container-success');
const dangerCard = document.getElementById('container-danger');



closeButtonSuccess.addEventListener('click', function () {
    successCard.classList.add('display-none');
})

closeButtonDanger.addEventListener('click', function () {
    dangerCard.classList.add('display-none');
})

button.addEventListener('click', function () {

    successCard.classList.remove('display-none');
    dangerCard.classList.remove('display-none');

    successCard.classList.add('show');
    dangerCard.classList.add('show');

    setTimeout(() => {
        successCard.classList.remove('show');
        dangerCard.classList.remove('show');

        successCard.classList.add('hide');
        dangerCard.classList.add('hide');

        setTimeout(() => {
            successCard.classList.add('display-none');
            dangerCard.classList.add('display-none');

            successCard.classList.remove('hide');
            dangerCard.classList.remove('hide');
        }, 1000);
    }, 5000);
})
