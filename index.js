let users = []

let p = ``

const uimaker = () => {
    users.map((element) => {
        p += `
        <div class="ui">
            <img src=${element.img} alt="" id="img">
            <h1>NAME : ${element.name}</h1>
            <h2>EMAIL : ${element.email}</h2>
            <h4>NUMBER : ${element.number}</h4>
            <h5>AGE : ${element.age}</h5>
        </div>
        `
    })
    document.getElementById("output").innerHTML = p
}
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("output").innerHTML = ""
    let user = {
        img: document.getElementById("img").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        age: document.getElementById("age").value,
    }
    users.push(user)
    console.log(user)
    uimaker()
})