console.log("Hello world");

let sum = 0;

function submitButton(event){

  event.preventDefault();
  console.log("test");
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let ID = document.getElementById("id-num").value;
  let jobTitle = document.getElementById("job-title").value;
  let salary = document.getElementById("salary").value;

  document.getElementById("info").innerHTML += ` <tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${ID}</td>
    <td>${jobTitle}</td>
    <td>${salary}</td>
    <td><button onclick="deleteButton(event)">Delete</button></td>
  </tr>`

  document.getElementById("first-name").value = '';
  document.getElementById("last-name").value = '';
  document.getElementById("id-num").value = '';
  document.getElementById("job-title").value = '';
  document.getElementById("salary").value = '';

  sum += Number(salary) / 12;
  document.getElementById("salary-count").textContent = sum;

  function overBudget(event) {
    console.log('testing overBudget');
     if (sum > 20000) {
     let footer = document.querySelector('footer');
     console.log(footer);
     footer.classList.add('over-budget')
    }
  }
  overBudget();
}

function deleteButton(event) {
  console.log('Deleting')
  event.target.parentElement.parentElement.remove("text");
}



