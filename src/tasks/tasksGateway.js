const baseUrl = "https://5e983e545eabe7001681bd52.mockapi.io/tasks";

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) throw new Error("Failed to create task");
  });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) throw new Error("Failed to change status of task");
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) throw new Error("Failed to delete task");
  });
};

export const fetchTasksList = () =>
  fetch(baseUrl).then((response) => {
    if (response.ok) return response.json();

    throw new Error("Failed to download tasks");
  });
