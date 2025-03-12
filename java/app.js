// const handBurger = document.querySelector('.mobile-menu');
// handBurger.addEventListener("click",()=>{
//     document.querySelector('.menu').classList.toggle('show')
// })

// Select all "like" buttons
const likeButtons = document.querySelector('.like-btn');

// Select all "dislike" buttons
const dislikeButtons = document.querySelector('.dislike-btn');
document.addEventListener('DOMContentLoaded', () => {
    // Loop over every blog item
    const blogItems = document.querySelectorAll('.blog-item');
    blogItems.forEach((item) => {
      // Select the comment button and comment input within this blog item
      const commentBtn = item.querySelector('.comment-btn');
      const commentInput = item.querySelector('.comment');
      
      // Only attach listener if both exist
      if (commentBtn && commentInput) {
        commentBtn.addEventListener('click', () => {
          commentInput.classList.toggle('show');
        });
      }
    });
  });
  
  