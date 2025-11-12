const tareas = [
  {
    id: 1,
    nombre: "Lavar platos",
    realizada: false,
  },
  {
    id: 2,
    nombre: "Barrer",
    realizada: false,
  },
  {
    id: 3,
    nombre: "Lavar ropa",
    realizada: false,
  },
];

const listaTareas = document.querySelector("#listaTareas");
const tareaInput = document.querySelector("#nuevaTarea");
const btnAgregar = document.querySelector("#agregarTarea");

const renderHtml = () => {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea) => {
    listaTareas.innerHTML += `<tr>
                                <td>${tarea.id}</td>
                                <td>${tarea.nombre}</td>
                                <td><input type="checkbox" /></td>
                                <td><button onClick="borrarTarea(${tarea.id})">&#x274c</button></td>
                            </tr>`;
  });
};

renderHtml();

btnAgregar.addEventListener("click", () => {
  if (tareaInput.value.trim() == "") {
    alert("Escribiste vacío");
  } else {
    const nuevaTarea = {
      id: tareas[tareas.length - 1].id + 1,
      nombre: tareaInput.value,
      realizada: false,
    };
    tareas.push(nuevaTarea);
    tareaInput.value = "";
    renderHtml();
  }
});

const borrarTarea = (id) => {
  const indexTarea = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(indexTarea, 1);
  renderHtml();
};
