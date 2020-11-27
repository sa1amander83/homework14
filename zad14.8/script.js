function pageLoaded() {
  const page = document.querySelector("#page");
  const pageAlert = document.querySelector("#pageAlert");
  const limit = document.querySelector("#limit");
  const limitAlert = document.querySelector("#limitAlert");
  const btn = document.querySelector("#button");
  const alert=document.querySelector("#alert");
  const output = document.querySelector("#output");
  let writeData; 
  const btnClear= document.querySelector("#btnClear");

//проврка на наличие в localstorage инфы
  // Проверка записей в localStorage сделана неправильно, т.к. вы проверяете просто наличие записей в localStorage, но не факт, что среди имеющихся записей будет та, что содержит ранее загруженные фотографии. Поэтому в случае, если в localStorage записан какой-то другой ключ (не items), возникает ошибка. Нужно проверять наличие конкретного свойства, которое нужно для дальнейшей работы
  if (localStorage.getItem('items')) {
     formatOutput(JSON.parse(localStorage.getItem('items'))
        );} 

   function sendRequest() {
 
   fetch(`https://picsum.photos/v2/list?page=${+page.value}&limit=${+limit.value}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
       formatOutput(data);
       writeLS(data);
       });
    }
   

    //запись в localstorage
function writeLS(data) {
writeData = localStorage.setItem('items',JSON.stringify(data));
return writeData;
}


  function formatOutput(data) {
      let cards = '';
       data.forEach(item => {
      const cardBlock = `
       <div class="card">
       <br>
         <img
           src="${item.download_url} "
           class="card-image" width=" 150px" height ="150px"
         />
            </div>
     `;
       cards  += cardBlock;
      });

     output.innerHTML = cards;
     writeLS(data);
  }


//проверка валидации вводных данных   
function check (){
   pageAlert.innerHTML= '';
   limitAlert.innerHTML='';
   alert.innerHTML= '';
   
    if (+page.value >10 || +page.value <1 || isNaN(+page.value)){
       pageAlert.innerHTML= `<p> Номер страницы вне диапазона от 1 до 10</p>`;}

    if (+limit.value >10 ||+limit.value <1 ||isNaN(+limit.value)){
       limitAlert.innerHTML= `<p> Лимит вне диапазона от 1 до 10</p>`;}
     
    if(+limit.value >10 ||+limit.value <1 ||isNaN(limit.value) ||
   +page.value >10 || +page.value <1 || isNaN(page.value)) {
   alert.innerHTML= `<p> Номер страницы и/или лимит вне диапазона от 1 до 10</p>`;} 
  
   else {
     alert.innerHTML= '';
     limitAlert.innerHTML='';
     pageAlert.innerHTML= '';
      sendRequest();
  }
 }

 btnClear.addEventListener("click", ()=> {
   localStorage.clear();
   });
          
  
 btn.addEventListener("click", check);
}

document.addEventListener("DOMContentLoaded", pageLoaded);


