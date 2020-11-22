function pageLoaded() {

  const btn = document.querySelector("#button");

  const output = document.querySelector("#output");



   function sendRequest() {
    const inputid = +document.querySelector("#page").value;
   fetch(`https://jsonplaceholder.typicode.com/users/${+inputid}/todos`)
      .then(response => {
             return response.json();

      })
      .then(data => {
        console.log(data);
       formatOutput(data);
      
          });
          // .catch(() => {
          //   console.log('Пользователь с указанным id не найден'); });
          }
   

  function formatOutput(data) {


 

          let todoAll = '';
     data.forEach(item => {

 const todoid=item.id;
  const userid=item.userId;
  const title=item.title;
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
   }else {
    const todoComplete = `
    <ul> <s>{
userid: ${item.userId},
id: ${item.id},
title: ${item.title},
completed: ${item.completed}
}</s></ul> `;
todoAll+=todoComplete;
  }
  });


     output.innerHTML = todoAll;
    
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