/** Global variable */
const keyDataWorkout = "data-workout";
let plannerForm = document.getElementById("planner-form");
let workoutData = {
  name: null,
  category: null,
  duration: null,
  date: "",
  notes: null,
};

/** get items */
const dataWorkout = JSON.parse(localStorage.getItem(keyDataWorkout));

/** functions */
function readDataTable() {
  let list = document.getElementById("workout-body");

  if (dataWorkout === null) {
    let row = document.createElement("tr");
    row.innerHTML = `<td colspan="7">Data tidak tersedia</td> `;
    list.appendChild(row);
  } else {
    dataWorkout.forEach((data, idx) => {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${idx + 1}</td>
                    <td>${data.date ?? "Tanggal kosong"}</td> 
                    <td>${data.name}</td> 
                    <td>${data.category ?? "kategiry kosong"}</td>
                    <td>${data.duration ?? "kategiry kosong"}</td>
                    <td>${data.notes ?? "catatan kosong"}</td>
                    <td>
                        <button class="btn btn-warning btn-sm edit">Edit</button>
                        <button id="${idx}" class="btn btn-danger btn-sm delete">Delete</button>
                    </td>
                    `;

      //   row.setAttribute("id", idx + 1);
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

function deleteData() {}
/** end functions */

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

let tbody = document.getElementById("workout-body");
let td = tbody.getElementsByTagName("td");
console.log(td[td.length - 1]);

/** END Get Element HTML */

/** Event Listener */
plannerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  createData(workoutData); // fungsi untuk create data
});

/** End vent Listener */

// pemanggilan fungsi
readDataTable();
