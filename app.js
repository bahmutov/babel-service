function add (a, b = 1) {
  console.log('adding', a, b)
  return a + b
}
function sum () {
  const a = parseInt(document.getElementById('a').value, 10)
  const b = parseInt(document.getElementById('b').value, 10) || undefined
  const result = add(a, b)
  document.getElementById('sum').innerText = result
}
document.getElementById('add').addEventListener('click', sum)
