// // const handBurger = document.querySelector('.mobile-menu');
// // handBurger.addEventListener("click",()=>{
// //     document.querySelector('.menu').classList.toggle('show')
// // })

// Select all "like" buttons
// const likeButtons = document.querySelector('.like-btn');

// Select all "dislike" buttons
// const dislikeButtons = document.querySelectorAll('.dislike-btn');
// const likeButtons = document.querySelectorAll('.like-btn');
// const addButtons = document.querySelectorAll(".add-btn")
// const paragraphComment = document.querySelector(".recent-posts p")
// const inputElement = document.querySelector('input')
// // console.log(inputElement)

// document.addEventListener('DOMContentLoaded', () => {

    
//     // Loop over every blog item
//     const blogItems = document.querySelectorAll('.blog-item');
//     blogItems.forEach((item) => {
//       // Select the comment button and comment input within this blog item
//       const commentBtn = item.querySelector('.comment-btn');
//       const commentInput = item.querySelector('.comment');
//       const addBtn = item.querySelector('.add-btn');
      
//       // Only attach listener if both exist
//       if (commentBtn && commentInput) {
//         commentBtn.addEventListener('click', () => {
//           commentInput.classList.toggle('show');
//           addBtn.classList.toggle('hidden')
//         });
//       }
//     });
//   });



// document.addEventListener('DOMContentLoaded', () => {
//   const blogItems = document.querySelectorAll('.blog-item');

//   // Selecting elements from the Recent Post section
//   const recentPostThumbnail = document.querySelector('.recent-posts .thumb img'); // The image in Recent Posts
//   const recentPostTitle = document.querySelector('.recent-posts .content h4'); // The h4 in Recent Posts
//   const recentPostComment = document.querySelector('.recent-posts .content p'); // The paragraph for recent comments
  
//   blogItems.forEach((item) => {
//       const addBtn = item.querySelector('.add-btn'); // "Add Comment" button inside the blog post
//       const inputElement = item.querySelector('.comment'); // Comment input field inside the blog post
//       const thumbnail = item.querySelector('.thumbnail img'); // Blog post thumbnail image
//       const strongText = item.querySelector('p strong'); // The text inside the <strong> tag of the blog post

//       if (addBtn && inputElement && thumbnail && strongText) {
//           addBtn.addEventListener('click', () => {
//               const commentText = inputElement.value.trim();

//               if (commentText) {
//                   // Update Recent Post Comment section
//                   recentPostComment.innerHTML = commentText;

//                   // Update Recent Post Thumbnail
//                   if (recentPostThumbnail) {
//                       recentPostThumbnail.src = thumbnail.src;
//                   }

//                   // Update Recent Post Title with <strong> text from the blog post
//                   if (recentPostTitle) {
//                       recentPostTitle.innerHTML = strongText.innerHTML;
//                   }

//                   // Clear the input field after adding the comment
//                   inputElement.value = '';
//               }
//           });
//       }
//   });
// });


  

// console.log(likeButtons);
// likeButtons.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         console.log('here Iam i')
        
//     })
// })
  
// const darkModeToggle = document.getElementById('dark-btn');
// darkModeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });

//things i need to improve wrong short on time


const blogPostsData = [
  {
    id: 'post1',
    title: "IT Experience",
    content:
      "Over the years, I have built up solid IT experience working with network systems, troubleshooting technical issues, and implementing innovative solutions. This background keeps me on the cutting edge of technology.",
    thumbnailUrl: "./ITexperience.png",
    likes: 0,
    dislikes: 0,
    comments: [],
    date: "2024-10-26",
  },
  {
    id: 'post2',
    title: "Fictional Dog",
    content:
      "My fictional dog, Buddy, is a spirited and loyal companion who always brings energy and excitement wherever he goes. His playful antics and warm nature make every day an adventure, reminding me of the simple joys in life.",
    thumbnailUrl: "./dog.jpeg",
    likes: 0,
    dislikes: 0,
    comments: [],
    date: "2024-10-26",
  },
  {
    id: 'post3',
    title: "Hobbies",
    content:
      "I enjoy a mix of creative and active hobbies, from photography and painting to hiking and reading. These activities help me unwind and spark my imagination.",
    thumbnailUrl: "./hobbies.png",
    likes: 0,
    dislikes: 0,
    comments: [],
    date: "2024-10-26",
  },
  {
    id: 'post4',
    title: "Programming Jobs",
    content:
      "I’m currently engaged in various programming projects, ranging from web development to mobile app design. Each project challenges me to innovate and continuously improve my coding skills while collaborating with dynamic teams.",
    thumbnailUrl: "./cpu.png",
    likes: 0,
    dislikes: 0,
    comments: [],
    date: "2024-10-26",
  },
  {
    id: 'post5',
    title: "Summer",
    content:
      "Summer brings a refreshing energy with longer days and warm weather. I love taking advantage of the season with outdoor adventures, relaxing by the beach, and exploring nature’s beauty for inspiration.",
    thumbnailUrl: "./summer.jpeg",
    likes: 0,
    dislikes: 0,
    comments: [],
    date: "2024-10-26",
  },
  {
    id: 'post6',
    title: "Fictional Cat",
    content:
      "My fictional cat, Whiskers, exudes elegance and mystery. With a graceful demeanor and curious spirit, Whiskers adds a touch of magic to my home, blending independence with affectionate moments that brighten my day.",
    thumbnailUrl: "./cat.jpeg",
    likes: 0,
    dislikes: 0,
    comments: [],
    date: "2024-10-26",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.querySelector(".blog");
  const recentPostThumbnail = document.querySelector(".recent-posts .thumb img");
  const recentPostTitle = document.querySelector(".recent-posts .content h4");
  const recentPostComment = document.querySelector(".recent-posts .content p"); //For recent comment
  const recentPostDate = document.querySelector(".recent-posts .content span");
  const recentPostLink = document.querySelector(".recent-posts .wrapper a"); // Get the <a> tag


  function renderBlogPosts() {
    blogContainer.innerHTML = ""; // Clear existing content

    blogPostsData.forEach((post) => {
      const blogItem = document.createElement("div");
      blogItem.classList.add("blog-item");
      blogItem.innerHTML = `
                <div class="blog-post">
                    <div class="thumbnail">
                        <img src="${post.thumbnailUrl}" alt="${post.title}">
                    </div>
                </div>
                <div class="blog-content">
                    <span>My Likes</span>
                    <h3>Likes: <span class="like-count" data-post-id="${post.id}">${post.likes}</span>, Dislikes: <span class="dislike-count" data-post-id="${post.id}">${post.dislikes}</span></h3> 
                    <p><strong>${post.title}:</strong> ${post.content}</p>
                    <div class="like-dislike">
                        <button class="like-btn" type="button" data-post-id="${post.id}">
                            <img src="./thumdup3.png" alt="Like">
                        </button>
                        <button class="dislike-btn" type="button" data-post-id="${post.id}">
                            <img src="./thumbDown2.jpeg" alt="Dislike">
                        </button>
                        
                        <button class="comment-btn" data-post-id="${post.id}">
                            <img src="./comment.png" alt="comment" />
                        </button>
                        <input type="text" class="comment" placeholder="add your comments" data-post-id="${post.id}">
                        <button class="add-btn hidden" data-post-id="${post.id}">add comment</button>
                    </div>
                </div>
            `;
      blogContainer.appendChild(blogItem);
    });

    attachEventListeners();
  }

  function attachEventListeners() {
    blogContainer.addEventListener("click", handleBlogClick);
  }

  function handleBlogClick(event) {
    const target = event.target;

    if (target.closest(".comment-btn")) {
      const btn = target.closest(".comment-btn");
      const postId = btn.dataset.postId;
      const blogItem = btn.closest(".blog-item");
      const commentInput = blogItem.querySelector(".comment");
      const addBtn = blogItem.querySelector(".add-btn");

      commentInput.classList.toggle("show");
      addBtn.classList.toggle("hidden");
    } else if (target.classList.contains("add-btn")) {
      const postId = target.dataset.postId;
      const blogItem = target.closest(".blog-item");
      const commentInput = blogItem.querySelector(".comment");
      const commentText = commentInput.value.trim();

      if (commentText) {
        const currentPost = blogPostsData.find((post) => post.id === postId);
        if (currentPost) {
          // Get current date in recognizable format
          const now = new Date();
          const formattedDate = now.toISOString().split("T")[0];

          currentPost.comments.push({ text: commentText, date: formattedDate }); // Store comment with date
          renderRecentPost(postId); // Update recent post
          commentInput.value = "";
          commentInput.classList.remove("show");
          target.classList.add("hidden");
        }
      }
    } else if (
      target.classList.contains("like-btn") ||
      target.closest(".like-btn")
    ) {
      const btn = target.closest(".like-btn");
      const postId = btn.dataset.postId;
      const postIndex = blogPostsData.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        blogPostsData[postIndex].likes++;
        updateLikeCount(postId); // Update like count in h3
      }
    } else if (
      target.classList.contains("dislike-btn") ||
      target.closest(".dislike-btn")
    ) {
      const btn = target.closest(".dislike-btn");
      const postId = btn.dataset.postId;
      const postIndex = blogPostsData.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        blogPostsData[postIndex].dislikes++;
        updateDislikeCount(postId); // Update dislike count in h3
      }
    }
  }

  function updateLikeCount(postId) {
    const likeCountSpan = document.querySelector(
      `.like-count[data-post-id="${postId}"]`
    );
    if (likeCountSpan) {
      const post = blogPostsData.find((p) => p.id === postId);
      likeCountSpan.textContent = post.likes; // Update the like count
    }
  }

  function updateDislikeCount(postId) {
    const dislikeCountSpan = document.querySelector(
      `.dislike-count[data-post-id="${postId}"]`
    );
    if (dislikeCountSpan) {
      const post = blogPostsData.find((p) => p.id === postId);
      dislikeCountSpan.textContent = post.dislikes; // Update the dislike count
    }
  }
  //Changes are in this function
   function renderRecentPost(postId) {
        const postData = blogPostsData.find(post => post.id === postId);
        if (postData) {
            recentPostThumbnail.src = postData.thumbnailUrl;
            recentPostTitle.textContent = postData.title;

            // Get the *last* comment's date and text, if any.
            if (postData.comments.length > 0) {
                const lastComment = postData.comments[postData.comments.length - 1];
                recentPostDate.textContent = `Posted on: ${lastComment.date}`;
                recentPostComment.textContent = lastComment.text; // Update <p> with last comment

                // Update <a> with the *number* of comments.  This is the key change.
                recentPostLink.textContent = `${postData.comments.length} comments`;
            } else {
                 recentPostDate.textContent = `Posted on: ${postData.date}`; //Original Post date
                recentPostComment.textContent = "No comments yet";  // No comments, clear <p>
                recentPostLink.textContent = "No comments yet";      // No comments
            }
        }
    }

  renderBlogPosts();
});

const darkModeToggle = document.getElementById("dark-btn");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});