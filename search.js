const searchBtn = document.querySelector("#searchButton");
searchBtn.addEventListener('click',()=>{
    let criteria = `${document.querySelector("select").value}`;
    let val = document.querySelector("input").value;
    const xhr = new XMLHttpRequest();
    const source = "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
    xhr.open('GET',source,false);
    xhr.onreadystatechange=()=>{
        if(xhr.readyState===4 && xhr.status===200){
            const response = JSON.parse(xhr.responseText);
            let output =`<hr><table class="table table-striped table-borderless table-hover">
            <thead>
              <tr>
                <th scope="col"> # </th>
                <th scope="col"> Id </th>
                <th scope="col"> Name </th>
                <th scope="col"> UserName</th>
                <th scope="col"> email </th>
                <th scope="col"> Contact</th>
                <th scope="col"> Website</th>
              </tr>
            </thead>
            <tbody>`;
            let peopleFound;
            if(criteria =='id'){
                peopleFound = response.filter(people => people[criteria]==val )
                
            }
            else
            peopleFound = response.filter(people => people[criteria].match(val) )
            for(let i=0;i<peopleFound.length;i++){
                output+=`<tr><th scope="row">${i+1}</th><td>${peopleFound[i].id}</td><td>${peopleFound[i].name}</td><td> ${peopleFound[i].username}</td><td>${peopleFound[i].email}</td><td> ${peopleFound[i].phone}</td><td> ${peopleFound[i].website}</td></tr>`
            }
            output+=`</tbody> </table>`
            document.querySelector("#searchResult").innerHTML=output;
    }
}

//4. send the request
xhr.send();




})