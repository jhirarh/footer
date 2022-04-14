function saveExcel(event){
  event.preventDefault()


  let name = document.getElementById("name");

  let email = document.getElementById("email");

  let url = "https://script.google.com/macros/s/AKfycbwJScFseAiwEOGUbDnN8AaqWHCiA7gmhjOey1l_xP0RcxujUB6x/exec?"
  

  fetch(url + new URLSearchParams({
    name: name.value,
    email: email.value
  }), {method: 'GET'})
    .then(response => {
        response.json()
            .then(data => {
                console.log(data)
            })
    })


}