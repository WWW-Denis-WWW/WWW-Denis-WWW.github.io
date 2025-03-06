let token = '123'

localStorage.setItem('token', token)

console.log('main.js: ', localStorage)
setTimeout(() => {
    console.log('main.js: ', localStorage)
}, 100)