async function signUp() {
    
    const userDetails = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value
    }

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


