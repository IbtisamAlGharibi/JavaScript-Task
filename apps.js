
   
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
