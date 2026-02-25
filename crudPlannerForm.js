let workoutDatabase = [];
// {
//     id: 1,
//     date: "2025-12-24",
//     name: "Push Up",
//     category: "Strength",
//     duration: 30,
//     notes: "30 Reps",
//   },

let editIndex = null;

function readData() {
  let template = "";

  if (workoutDatabase.length === 0) {
    template += `<td colspan="7">Data tidak tersedia</td> `;
  } else {
    for (let i = 0; i < workoutDatabase.length; i++) {
      let perObj = workoutDatabase[i];

      template += `
        <tr>
            <td>${perObj.id}</td>
            <td>${perObj.date}</td> 
            <td>${perObj.name}</td> 
            <td>${perObj.category}</td>
            <td>${perObj.duration}</td>
            <td>${perObj.notes}</td>
            <td>
                <button class="btn btn-warning btn-sm edit" onclick="editData(${perObj.id})">Edit</button>
                <button id="del-btn-${perObj.id}" class="btn btn-danger btn-sm delete" onclick="deleteData(${perObj.id})">Delete</button>
            </td>
        </tr>
        `;
    }
  }

  let tableBody = document.getElementById("workout-body");
  tableBody.innerHTML = template;
}

function createData() {
  //   console.log("clicked!");
  let workoutName = document.getElementById("workout-name");
  let workoutCategory = document.getElementById("workout-category");
  let workoutDuration = document.getElementById("workout-duration");
  let workoutDate = document.getElementById("workout-date");
  let workoutNotes = document.getElementById("workout-notes");

  if (
    workoutName.value === "" ||
    workoutCategory.value === "" ||
    workoutDuration.value === "" ||
    workoutDate.value === "" ||
    workoutNotes.value === ""
  ) {
    alert("Please fill the form!");
    return;
  }

  if (editIndex !== null) {
    for (let i = 0; i < workoutDatabase.length; i++) {
      if (workoutDatabase[i].id == editIndex) {
        workoutDatabase[i].name = workoutName.value;
        workoutDatabase[i].category = workoutCategory.value;
        workoutDatabase[i].duration = workoutDuration.value;
        workoutDatabase[i].date = workoutDate.value;
        workoutDatabase[i].notes = workoutNotes.value;
      }
    }
    editIndex = null;

    document.getElementById("btn-2").textContent = "Add Workout";

    workoutName.value = "";
    workoutCategory.value = "";
    workoutDuration.value = "";
    workoutDate.value = "";
    workoutNotes.value = "";

    readData();
  } else {
    let id = 1;

    if (workoutDatabase.length !== 0) {
      id = workoutDatabase[workoutDatabase.length - 1].id + 1;
    }

    let newObj = {
      id: id,
      date: workoutDate.value,
      name: workoutName.value,
      category: workoutCategory.value,
      duration: workoutDuration.value,
      notes: workoutNotes.value,
    };

    workoutDatabase.push(newObj);

    workoutName.value = "";
    workoutCategory.value = "";
    workoutDuration.value = "";
    workoutDate.value = "";
    workoutNotes.value = "";

    readData();
  }
}

function deleteData(id) {
  let newData = [];
  for (let i = 0; i < workoutDatabase.length; i++) {
    if (id != workoutDatabase[i].id) {
      newData.push(workoutDatabase[i]);
    }
  }

  workoutDatabase = newData;
  readData();
}

function editData(id) {
  editIndex = id;
  let getData = null;
  for (let i = 0; i < workoutDatabase.length; i++) {
    if (id === workoutDatabase[i].id) {
      getData = workoutDatabase[i];
      break;
    }
  }

  document.getElementById("workout-name").value = getData.name;
  document.getElementById("workout-category").value = getData.category;
  document.getElementById("workout-duration").value = getData.duration;
  document.getElementById("workout-date").value = getData.date;
  document.getElementById("workout-notes").value = getData.notes;

  document.getElementById("btn-2").textContent = "Update Workout";
}

readData();
