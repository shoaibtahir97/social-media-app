var form = document.getElementById("form");
var input = document.getElementById("input");
var msg = document.getElementById("msg");
var posts = document.getElementById("posts");


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log("button clicked");

    formValidation()
})

let formValidation = () => {
    if (input.value === ""){
        msg.innerHTML = "Post cannot be blank";
        console.log("failure")
    }
    else{
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
}

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost()
}

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fas fa-edit"></i>
            <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value="";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove(); 
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}

// var form = document.getElementById("form")
// var input = document.getElementById("input")
// var msg = document.getElementById("msg")
// var posts = document.getElementById("posts")

// form.addEventListener("submit", (e)=> {
//     e.preventDefault();
//     console.log("Button Clicked");

//     formValidation();
// })

// let formValidation = () => {
//     if(input.value === ""){
//         msg.innerHTML = "Post cannot be blank"
//         console.log("failure")
//     }
//     else{
//         console.log("success")
//         msg.innerHTML = "";
//         acceptData();
//     }
// }

// let data = {};

// let acceptData = () =>{
//     data["text"] = input.value;
//     console.log(data)
//     createPost();
// }

// let createPost = () => {
//     posts.innerHTML += `
//     <div>
//         <p>${data.text}</p>
//         <span class="options">
//             <i class="fas fa-edit"></i>
//             <i class="fas fa-trash-alt"></i>
//         </span>
//     </div>
//     `;
//     input.value = "";
// }







