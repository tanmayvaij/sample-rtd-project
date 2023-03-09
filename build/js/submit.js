// function for storing data in firebase
async function submit() {
    
    // Collecting user information and storing as an object
    const userDetails = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value
    }

    // Sending to firebase
    await fetch("https://sample-rtd-project-default-rtdb.firebaseio.com/userdetails.json", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userDetails)
    })

    alert("Data Sent")

    location.reload()

}
