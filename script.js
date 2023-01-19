let form = document.querySelector('form')
let form2 = document.querySelector(".form2")
let icon = document.querySelector("i")
let div = document.querySelector(".div")
let userInfo = { }
function handleSubmit(event){
    event.preventDefault();
    console.dir(form)
    let elements = event.target.elements
    userInfo.userName = elements.name.value
    userInfo.email = elements.email.value
    userInfo.favorite = elements.favorite.value
    userInfo.color = elements.color.value
    userInfo.range = elements.range.value
    userInfo.fiction = elements.fiction.value
    userInfo.terms = elements.terms.checked
    console.log(userInfo)
    div.style.display='block';
   form2.style.display='block';
   add(userInfo)
   elements.name.value=""
   elements.email.value=""
   elements.favorite.value="movies"
   elements.color.value=""
   elements.range.value=""
   elements.fiction.value=""
   elements.terms.checked=""

}
form.addEventListener("submit" , handleSubmit)

function add(userInfo){
    form2.innerHTML = ''
 let name = document.createElement('h1')
 name.innerText = `${userInfo.userName}`
 let Email = document.createElement('h2')
 Email.innerText = `Email: ${userInfo.email}`
 let favorite = document.createElement('h2')
 favorite.innerText = `You Love: ${userInfo.favorite}`
 let color = document.createElement('h2')
 color.innerText = `Color: ${userInfo.color}`
 let range = document.createElement('h2')
 range.innerText = `Rating: ${userInfo.range}`
 let fiction= document.createElement('h2')
 fiction.innerText = `Book Genre: ${userInfo.fiction}`
 let terms = document.createElement("h2")
 terms.innerText = `${userInfo.terms}` == 'true' ? '👉You agree to Terms and Conditions' : 'You are not agree to Terms and Conditions';
form2.append(name,Email,favorite,color,range,fiction,terms)
form.style.display= 'none'
}
function closeButton(){
    form.style.display='block'
    div.style.display='none'
}
icon.addEventListener("click" , closeButton)