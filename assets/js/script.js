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
const tareasTotales = document.querySelector("#tareasTotales");
const tareasRealizadas = document.querySelector("#tareasRealizadas");

const renderHtml = () => {
  listaTareas.innerHTML = "";
  tareas.forEach((tarea) => {
    listaTareas.innerHTML += `<tr>
                                <td>${tarea.id}</td>
                                <td>${tarea.nombre}</td>
                                <td><input onClick="completarTarea(${tarea.id})" type="checkbox" /></td>
                                <td><button onClick="borrarTarea(${tarea.id})">&#x274c</button></td>
                            </tr>`;
  });
};

const contarTareas = () => {
  tareasTotales.innerHTML = tareas.length;
};

const contarRealizadas = () => {
  const realizadas = tareas.filter((tarea) => tarea.realizada === true);
  tareasRealizadas.innerHTML = realizadas.length;
};

renderHtml();
contarTareas();
contarRealizadas();

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
    contarTareas();
  }
});

const borrarTarea = (id) => {
  const indexTarea = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(indexTarea, 1);
  renderHtml();
  contarTareas();
  contarRealizadas();
};

const completarTarea = (id) => {
  const indexTarea = tareas.findIndex((tarea) => tarea.id === id);
  tareas[indexTarea].realizada = true;
  contarRealizadas();
};
