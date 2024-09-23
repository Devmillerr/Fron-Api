import axios from "axios";

const API_URL = "https://tasks-yordin21-yordin21s-projects.vercel.app/";

//Otener totas las tareas

export const getTasks = async () => {
  return await axios.get(API_URL);
};

//Crear una nueva tarea

export const createTask = async (task) => {
  return await axios.post(API_URL, task);
};

//obtener una tarea por el ID

export const getTaskById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// atualizar una tarea

export const updateTask = async (id, task) => {
  return await axios.put(`${API_URL}/${id}`);
};

//Eliminar una tarea

export const deleteTask = async (id, task) => {
  return await axios.delete(`${API_URL}/${id}`);
};
