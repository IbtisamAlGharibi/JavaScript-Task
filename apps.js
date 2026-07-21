
   
const list = document.getElementById("uni-list");


async function loadPosts() {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json();
    console.log("Got " + data.length);
    return data;
    } catch (error) {
        console.log("Error: " , error);
        return [];
    }
    
}

async function render() {
    
const uni = await loadPosts();

for(const s of uni){
    const li= document.createElement("li");
    li.textContent = `${s.userId} - ${s.title}`;

    list.appendChild(li);
}
}
render();


const list2 = document.getElementById("comments-list");
async function loadComments() {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const data = await response.json();
    console.log("Got " + data.length);
    return data;
    } catch (error) {
        console.log("Error: " , error);
        return [];
    }
    
}

async function render2() {
    
const uni2 = await loadComments();

for(const s of uni2){
    const li= document.createElement("li");
    li.textContent = `${s.id} - ${s.email}`;

    list2.appendChild(li);
}
}
render2();


const list3 = document.getElementById("albums-list");
async function loadAlbums() {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`)
    const data = await response.json();
    console.log("Got " + data.length);
    return data;
    } catch (error) {
        console.log("Error: " , error);
        return [];
    }
    
}

async function render3() {
    
const uni3 = await loadAlbums();
for(const s of uni3){
    const li= document.createElement("li");
    li.textContent = `${s.id} - ${s.title}`;

    list3.appendChild(li);
}
}
render3();


const list4 = document.getElementById("todos-list");
async function loadTodos() {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await response.json();
    console.log("Got " + data.length);
    return data;
    } catch (error) {
        console.log("Error: " , error);
        return [];
    }
    
}


async function render4() {   
const uni4 = await loadTodos();
for(const s of uni4){
    const li= document.createElement("li");
    li.textContent = `${s.id} - ${s.title}`;

    list4.appendChild(li);
}
}
render4();



const list5 = document.getElementById("users-list");
async function loadUsers() {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json();
    console.log("Got " + data.length);
    return data;
    } catch (error) {
        console.log("Error: " , error);
        return [];
    }
    
}


async function render5() {   
const uni5 = await loadUsers();
for(const s of uni5){
    const li= document.createElement("li");
    li.textContent = `${s.name} - ${s.username} - ${s.email}`;

    list5.appendChild(li);
}
}
render5();


const postList = document.getElementById("post-id-list");
async function loadPostById() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function renderPostById() {
    const post = await loadPostById();

    const li = document.createElement("li");
    li.textContent = `${post.id} - ${post.title}`;

    postList.appendChild(li);
}

renderPostById();


const commentList = document.getElementById("comment-id-list");
async function loadCommentById() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function renderCommentById() {
    const post = await loadCommentById();

    const li = document.createElement("li");
    li.textContent = `${post.id} - ${post.name} - ${post.email}`;

    commentList.appendChild(li);
}

renderCommentById();


const albumList = document.getElementById("album-id-list");
async function loadAlbumById() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function renderAlbumById() {
    const post = await loadAlbumById();

    const li = document.createElement("li");
    li.textContent = `${post.id} - ${post.title}`;

    albumList.appendChild(li);
}

renderAlbumById();