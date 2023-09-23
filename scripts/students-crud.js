let studentRecords = [];

let id=1;

const studentBody = document.getElementById('studentsTable');
const studentForm = document.getElementById('studentForm');

function initialize(){
   studentForm.style.display= 'none';
   studentBody.innerHTML='';
    //loop through the records
    studentRecords.forEach(element => {
        addRow(element)
    });
}

function addRow(student){
    let row = document.createElement(`tr`);
    const button = `<button onClick="deleteStudent(${student.id})">Delete<button>`;

    let fName = document.createElement('td')

    let lName = document.createElement('td');
    let id = document.createElement('td')
    id.innerHTML= button;
    fName.textContent =student.firstName;
    lName.textContent=student.lastName;
    row.append(fName,lName,id);
    studentBody.appendChild(row);

}

function addNewStudent(){
   const firstName =  document.getElementById('firstName').value;
   const lastName =  document.getElementById('lastName').value;
   id+=1;
   let newStudent= {id, firstName,lastName};
   studentRecords.push(newStudent);
   addRow(newStudent);
   studentForm.style.display= 'none';
   clearStudentForm();
}

function deleteStudent(id){
    studentRecords = studentRecords.filter(item => item.id!== id);
    initialize();
}

function clearStudentForm(){
    document.getElementById('firstName').value ='';
    document.getElementById('lastName').value ='';
}

function showStudentForm(){
    studentForm.style.removeProperty('display');
}



//showStudentForm

initialize();