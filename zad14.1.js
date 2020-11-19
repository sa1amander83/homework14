const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang = "en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");


let list=[];
let listNode = xmlDOM.querySelector("list");
 let studentNode = listNode.querySelector("student");



let students = listNode.querySelectorAll('student');
 
for (let i=0; i< students.length; i++){
 let studobj =  students[i];

 let langNode = studobj.querySelector("name");
 let nameNode = studobj.querySelector("first");
 let secNode = studobj.querySelector("second");
 let ageNode = studobj.querySelector("age");
 let profNode = studobj.querySelector("prof");
 let langAttr = langNode.getAttribute('lang');

studobj= {
  name: nameNode.textContent+' '+secNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: langAttr};
    list.push(studobj);
  }
 console.log('list: ', list); 
