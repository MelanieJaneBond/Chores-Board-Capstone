const remoteURL = "http://localhost:5002";

export default {
  getChoresByUserId(path, id) {
    return fetch(`${remoteURL}/${path}?userId=${id}`)
    .then(e => e.json())
  },

  removeAndList(resource, id, userId) {
    return this.delete(resource, id)
    .then( () => this.getChoresByUserId("chores", userId))
  },

  getCompletedTrueChores(id) {
    return fetch(`${remoteURL}/chores?isComplete=true&userId=${id}`)
    .then(c => c.json())
  },

  patchChore(object) {
    return fetch(`${remoteURL}/chores/${object.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json" },
        body: JSON.stringify(object)
      })
      .then(c => c.json())
  },

  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`)
    .then(e => e.json());
  },
  
  all(resource) {
    return fetch(`${remoteURL}/${resource}`)
    .then(r => r.json());
  },

  post(resource, resourceObj) {
    return fetch(`${remoteURL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(resourceObj)
    }).then(data => data.json());
  },

  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
      method: "DELETE"
    });
  },

  put(resource, editedObj) {
    return fetch(`${remoteURL}/${resource}/${editedObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedObj)
    }).then(data => data.json());
  }
};
