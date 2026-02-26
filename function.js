/** Global Variable */
const keyDataWorkout = "data-workout";
let plannerForm = document.getElementById("planner-form");
let workoutData = {
  name: null,
  category: null,
  duration: null,
  date: null,
  notes: null,
};

/** Get Items */
const dataWorkout = JSON.parse(localStorage.getItem(keyDataWorkout));
let editIndex = null;

/** Functions */
function readDataTable() {
  let list = document.getElementById("workout-body");

  if (dataWorkout === null || dataWorkout.length === 0) {
    let row = document.createElement("tr");
    row.innerHTML = `<td colspan="7">Data tidak tersedia</td> `;
    list.appendChild(row);
  } else {
    dataWorkout.forEach((data, idx) => {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${idx + 1}</td>
                    <td>${data.date ?? "Tanggal Kosong"}</td> 
                    <td>${data.name ?? "Nama Kosong"}</td> 
                    <td>${data.category ?? "Kategori Kosong"}</td>
                    <td>${data.duration ?? "Durasi Kosong"}</td>
                    <td>${data.notes ?? "Catatan Kosong"}</td>
                    <td>
                        <button class="btn btn-warning btn-sm edit" onclick="editData(${idx})">Edit</button>
                        <button id="del-btn-${idx}" class="btn btn-danger btn-sm delete" onclick="deleteData(${idx})">Delete</button>
                    </td>
                    `;
      list.appendChild(row);
    });
  }
}

function storeLocalStorage(key, value) {
  if (!key || !value) {
    alert("localstorage error");
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function createData(data) {
  for (const d in data) {
    if (data[d] === null || !data || data === "") {
      alert("please fill the form");
      return;
    }
  }

  if (dataWorkout !== null) {
    let newData = dataWorkout;
    newData.push(data);
    storeLocalStorage(keyDataWorkout, newData);
    window.location.reload();
  } else {
    storeLocalStorage(keyDataWorkout, [data]);
    window.location.reload();
  }
}

function updateData(data) {
  let newData = dataWorkout;
  newData[editIndex] = data;
  storeLocalStorage(keyDataWorkout, newData);
  editIndex = null;
  window.location.reload();
}

function deleteData(id) {
  console.log(id);
  let data = dataWorkout;
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    if (i != id) {
      newData.push(data[i]);
    }
  }

  console.log(newData);
  storeLocalStorage(keyDataWorkout, newData);
  window.location.reload();
}

function editData(id) {
  editIndex = id;
  let data = dataWorkout[id];

  document.getElementById("workout-name").value = data.name;
  document.getElementById("workout-category").value = data.category;
  document.getElementById("workout-duration").value = data.duration;
  document.getElementById("workout-notes").value = data.notes;
  document.getElementById("workout-date").value = data.date;
  
  const btn = document.getElementById("btn-2");
  btn.textContent = "Edit Workout";
  btn.classList.remove("btn-primary");
  btn.classList.add("btn-success");

  workoutData.name = data.name;
  workoutData.category = data.category;
  workoutData.duration = data.duration;
  workoutData.notes = data.notes;
  workoutData.date = data.date;
}

/** End Functions */

/** Get Element HTML */
document.getElementById("workout-name").addEventListener("change", (e) => {
  workoutData.name = e.target.value;
});

document.getElementById("workout-category").addEventListener("change", (e) => {
  workoutData.category = e.target.value;
});

document.getElementById("workout-duration").addEventListener("change", (e) => {
  workoutData.duration = e.target.value;
});

document.getElementById("workout-notes").addEventListener("change", (e) => {
  workoutData.notes = e.target.value;
});

document.getElementById("workout-date").addEventListener("change", (e) => {
  workoutData.date = e.target.value;
});
/** END Get Element HTML */

/** Event Listener */
plannerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (editIndex === null) {
    createData(workoutData); // fungsi untuk create data
  } else updateData(workoutData);
});

/** End Event Listener */

// Pemanggilan Fungsi
readDataTable();
