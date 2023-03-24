const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('passworsd');
const confirmInput = document.getElementById('confirm');
const introductionInput = document.getElementById('introduction');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents the form from submitting to the server

    // Validate the form inputs
    if (nameInput.value.trim() === '') {
        alert('Please enter your name');
        return;
    }

    if (passwordInput.value.trim() === '') {
        alert('Please enter your possword');
        return;
    }

    if (confirmInput.value.trim() === '') {
        alert('Please confirm your possword');
        return;
    }

    if (introductionInput.value.trim() === '') {
        alert('Please enter your introduction');
        return;
    }

    const dropdown = document.getElementById("dropdown");

    dropdown.addEventListener("change", function () {
        const selectedOption = dropdown.value;
        console.log("You selected: " + selectedOption);
    });

    const yearDropdown = document.getElementById("year-dropdown");

    yearDropdown.addEventListener("change", function () {
        const selectedYear = yearDropdown.value;
        console.log("You selected: " + selectedYear);
        // Do something with the selected year, such as submitting a form
    });

    // Submit the form data
    const formData = new FormData(form);
    fetch('/submit-form', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Form submitted successfully');
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred while submitting the form');
        });
});