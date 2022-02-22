const heartBox = document.querySelector(".heartIcon");
const heart = document.querySelector(".fa-heart");
const nameContainer = document.querySelector(".productName")
const commentSection= document.querySelector("#commentForm");
const formInput = commentSection.querySelector("input");
const commentLists=document.querySelector(".commentLists");


const fillHeat = (e) =>{
heartBox.innerHTML = "<i class='fa fa-solid fa-heart' style = color:red></i>"
}

const leaveComment = (e) => {
    e.preventDefault();
    let {value} = formInput;
    const comment = `<span class="nickname">익명</span>
    <span class="comment">${value}</span>`
    let li = document.createElement("li");
    li.innerHTML = comment;
    commentLists.appendChild(li);
    formInput.value=""
}

heartBox.addEventListener("click",fillHeat)
commentForm.addEventListener("submit",leaveComment)