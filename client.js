console.log("Hello world");

let sum = 0;
function submitButton (event){

  event.preventDefault();
  console.log("test");
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let ID = document.getElementById("id-num").value;
  let jobTitle = document.getElementById("job-title").value;
  let salary = document.getElementById("salary").value;
  let submitted = document.getElementById("sum");
  document.getElementById("info").innerHTML += ` <tr>
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${ID}</td>
  <td>${jobTitle}</td>
  <td>${salary}</td>
  </tr>`

  document.getElementById("first-name").value = '';
  document.getElementById("last-name").value = '';
  document.getElementById("id-num").value = '';
  document.getElementById("job-title").value = '';
  document.getElementById("salary").value = '';

  sum += salary;
  document.getElementById("salary-count").textContent = sum;

}