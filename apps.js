
   
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
    
const uni3 = await loadComments();
for(const s of uni3){
    const li= document.createElement("li");
    li.textContent = `${s.id} - ${s.title}`;

    list3.appendChild(li);
}
}
render3();
