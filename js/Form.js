function storeFormData(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Retrieve form data
    const name = document.getElementById('name').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const message = document.getElementById('message').value;

    // Create an object to store the data
    const formData = {
        name: name,
        contactNumber: contactNumber,
        message: message
    };

    // Store data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Optionally, display a confirmation or clear the form
    alert('Form data saved successfully!');
    document.getElementById('contactForm').reset();
}