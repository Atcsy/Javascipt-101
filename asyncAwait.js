 async function fetchUsers() {
     const resp = await fetch ('https://jsonplaceholder.typicode.com/users')
     const data = await resp.json();
     console.log(data);
 }
 fetchUsers();


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];
