
  let inputid = +document.getElementById("#inputid");
  const btn = document.querySelector('#getbtn');
function pageLoaded() {

 

   btn.addEventListener("click", check);
  function check(){
    
    
    // Делаем запрос за данными
    fetch(`https://jsonplaceholder.typicode.com/users/${inputid}/todos`)
      .then((response) => {
        // Объект ответа на запрос
        console.log('response', response);
        // Превращаем объект в JSON. Мы не можем его сразу прочитать,
        // надо отдать в следующий then
        const result = response.json();
        console.log('result', result);
        return result;
      })
      .then((data) => {
        // Объект результата в формате JSON
        console.log(data);
      })
      .catch(() => { console.log('Пользователь с указанным id не найден'); });
 
  


}

}
  
document.addEventListener("DOMContentLoaded", pageLoaded);