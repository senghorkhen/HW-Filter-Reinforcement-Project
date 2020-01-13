var url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
.then(response => response.json())
.then(data => {
    var result = document.querySelector('#listNameId');
    data.forEach(item => {
        result.innerHTML +=`
            <li>${item.name}</li>
        `;
    });
})
.catch(() => console.error("Cannot request"))
.finally(() => console.log("This code always execute!!!"));

function onFilterInput() {
    var inputElement = document.querySelector('input');
    var filter = inputElement.value.toUpperCase();
    var textValue;
    const listElement = document.getElementsByTagName("li");
    for (let i = 0; i < listElement.length; i++) {
        textValue = listElement[i].textContent || listElement[i].innerText;
        let isFind = textValue.toUpperCase().indexOf(filter) > -1;
        if(isFind){
            listElement[i].style.display = "block";
        }else{
            listElement[i].style.display = "none";
        }
    }
}
document.addEventListener('keyup', onFilterInput);