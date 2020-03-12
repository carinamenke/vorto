export function saveToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function loadFromLocal(name) {
  const jsonString = localStorage.getItem(name)
  try {
    const data = JSON.parse(jsonString)
    return data
  } catch (error) {
    console.log(error)
  }
}
