const xhr = new XMLHttpRequest();
const source = "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";

const arr=[
    "assets/pic1.png",
    "assets/pic2.jpg",
    "assets/pic3.png",
    "assets/pic4.png",
    "assets/pic5.png",
    "assets/pic6.png",
    "assets/pic7.jpg",
    "assets/pic8.png",
    "assets/pic9.jpg",
    "assets/pic10.png"
]


xhr.open('GET',source,false);
xhr.onreadystatechange=()=>{
    if(xhr.readyState===4 && xhr.status===200){
        const response = JSON.parse(xhr.responseText);
        let output = '';
        for(let i=0;i<response.length;i++){
            let email = `mailto:${response[i].email}`;
            let user_name=`username:${response[i].username}`
        output+=`<div style="width:200px;height:200px;margin:15px;background-color:white;display:flex;justify-content:space-between;flex-direction:column;padding-top:5px;align-items:center;">
        <div>
            <img src="${arr[i]}" height=100px width=100px/>
        </div><br><b>${response[i].name}</b><br>
        <div><a href=${email} ><i class="fa-solid fa-message" style="color:navy"></i></a> <i style="color:navy" 
        title = ${user_name} class="fa-solid fa-circle-info"></i>
        </div>
        </div>`
        document.querySelector("#display").innerHTML = output;
        }
    }
}

//4. send the request
xhr.send();


