function add(a, b = 1) {
  console.log('adding', a, b)
  return a + b
}
function sum() {
  const a = parseInt(document.getElementById('a').value)
  const b = parseInt(document.getElementById('b').value) || undefined
  const result = add(a, b)
  document.getElementById('sum').innerText = result
}
document.getElementById('add').addEventListener('click', sum)
