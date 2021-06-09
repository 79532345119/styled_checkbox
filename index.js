console.log("Hello world")

let commonInput = document.getElementById('cb1')
console.log(commonInput.labels[0])

commonInput.addEventListener('click', e =>commonInput.labels[0].classList.add('waiting'))