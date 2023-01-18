function submitForm() {
    console.log('hello');
    let formIsValid = true;
    const form = document.getElementById("registerForm");
    const inputs = form.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
            formIsValid = false;
            break;
        }
    }
    if (formIsValid) {
        const formData = new FormData(form);
        fetch("/register", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server here
                // ...
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
}
