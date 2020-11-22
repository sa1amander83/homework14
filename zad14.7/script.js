function pageLoaded() {

  const btn = document.querySelector("#button");

  const output = document.querySelector("#output");



   function sendRequest() {
    const inputid = +document.querySelector("#page").value;

if (isNaN(inputid)|| inputid>10 || inputid<1) {
  alert ('пользователь с указанным id не существует');
}
else {

   fetch(`https://jsonplaceholder.typicode.com/users/${+inputid}/todos`)
      .then(response => {
            return response.json();
            })
      .then(data => {
        formatOutput(data);
            });
              }
   
  function formatOutput(data) {

     let todoAll = '';
      data.forEach(item => {

      const complete=item.completed;

if (complete==false){
        const todoUncomplete = `
   <ul>{
      userid: ${item.userId},
      id: ${item.id},
      title: ${item.title},
      completed: ${item.completed}
   }</ul> `;
   todoAll += todoUncomplete;

   } else {
  const todoComplete = `
 <ul> <s>{
    userid: ${item.userId},
    id: ${item.id},
    title: ${item.title},
    completed: ${item.completed}
    }</s></ul> `;
todoAll+=todoComplete;
  }});
     output.innerHTML = todoAll;
    
  }
}
 btn.addEventListener("click", sendRequest);
}

document.addEventListener("DOMContentLoaded", pageLoaded);




























//   function pageLoaded() {

//     const btn = document.querySelector('#getbtn');
//  function check(){

//     let inputid = +document.querySelector("#inputid").value;
//    // Делаем запрос за данными 
 
//    const url=`https://jsonplaceholder.typicode.com/users/3/todos`;
   
  


//     fetch(`https://jsonplaceholder.typicode.com/users/${inputid}/todos`)
//         .then(response => {
//             return response.json();
//     // Объект ответа на запрос
//       //  console.log('response', response);
     
//       //  const result = response.json();
//       //  console.log('result', result);
//       //  return result;
//      })
//      .then(data => {
//        // Объект результата в формате JSON
// console.log(data);
// writeoutput(data);
//            })
//       .catch(() => {
//    console.log('Пользователь с указанным id не найден'); });
  
//  }
   
// btn.addEventListener("click", check);
// }

// function writeoutput(data) {
//   const todoData = JSON.parse(data);  
  
//   let output = document.getElementById("#output");
  
//           let todos = '';
//      data.forEach(item => {
//  const todoid=todoData.id;
//   const userid=todoData.userid;
//   const title=todoData.title;
//   const complete=todoData.completed;
//        const todoElement = `
//           <ul>{
//     userid: ${todoData.userid},
//     id: ${todoData.id},
//     title: ${todoData.title},
//     completed: ${todoData.complete}
// }</ul>
            
//      `;
//        todos += todoElement;
//       });
 
//      output.innerHTML = todos;
   
   
  
// }
  
// document.addEventListener("DOMContentLoaded", pageLoaded);