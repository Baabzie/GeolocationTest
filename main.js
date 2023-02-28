function success(pos) {
    const crd = pos.coords;
    console.log(crd.latitude);
    console.log(crd.longitude);
    let message = document.createElement("h1");
    message.innerHTML = crd.latitude + " - " + crd.longitude;
    document.getElementById("body").append(message);
}

function error() {

    let message = document.createElement("h1");
    console.log("No geolocation found!")
    message.innerHTML = "No geolocation found!";
    document.getElementById("body").append(message);
}

navigator.geolocation.getCurrentPosition(success, error);