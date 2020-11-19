
function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
        xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Запрос не удался: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);

        if (callback) {
          callback(result);
        }
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  }
   const btnNode = document.querySelector('.request');

   const resultNode = document.querySelector('#output');

const outNode = document.querySelector('#outUrl');

  function displayResult(apiData) {

    let tableData = '';
    //убираем имеющуюся строку данных
    let addrow= document.querySelectorAll("#addrow");
    if (addrow.length>0) {
      addrow.forEach(el=>el.remove());}

//находим индекс выбранного года и погнали
let selectedYear=document.querySelectorAll("year");
let year=document.getElementById("selectedYear");
let getYearValue=+year.options[year.selectedIndex].value;


const item =  apiData.map((item) => item);
const getYear =  apiData.map((item) => item.year);

for (let i =0; i<item.length; i++){
let tabledata="";

if(getYear[i]==+getYearValue){

  let sales =[];
 


    for(let prop in item[i].sales) {
        let tableDataRow = 
       `<td id="addrow">${item[i].sales[prop]}</td>`;
       tableData  += tableDataRow;
sales.push(item[i].sales[prop]);

      }
    var table = document.querySelector('#table');
    var tr = document.createElement("tr");
      tr.innerHTML = tableData;
      table.appendChild(tr);
   
  outNode.innerHTML=`<a href =" https://quickchart.io/chart?c={type:'bar',data:{labels:['KB.1','KB.2','KB.3','KB.4'],datasets:[{label:'SALARY year ${getYear[i]}',data:[${sales}]}]}}">ССылка на график</a>`;

    }
   }
  }
  
  btnNode.addEventListener('click', () => {
    useRequest('https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440', displayResult);
  });