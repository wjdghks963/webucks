const heartBox = document.querySelector(".heartIcon");
const heart = document.querySelector(".fa-heart");
const nameContainer = document.querySelector(".productName")
const commentSection= document.querySelector("#commentForm");
const formInput = commentSection.querySelector("input");
const commentLists=document.querySelector(".commentLists");


const fillHeat = () =>{
heartBox.innerHTML = "<i class='fa fa-solid fa-heart' style = color:red></i>"
}

const leaveComment = (event) => {
    event.preventDefault();
    let {value} = formInput;
    let li = document.createElement("li");
    const nickname = document.createElement("span");
    nickname.setAttribute("class","nickname");
    nickname.innerHTML = "익명";

    const comment = document.createElement("span");
    comment.setAttribute("class","comment");
    comment.innerHTML = value;

    const delBtn = document.createElement("button");
    delBtn.setAttribute("class","commentDel");
    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click",()=>{
        li.remove()
    })

    li.appendChild(nickname);
    li.appendChild(comment);
    li.appendChild(delBtn);
    commentLists.append(li);

    formInput.value=""
}

const deleteComment = () =>{


}

heartBox.addEventListener("click",fillHeat)
commentForm.addEventListener("submit",leaveComment)
