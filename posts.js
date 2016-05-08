'use strict';

// Utils for working with NodeLists
NodeList.prototype.forEach = Array.prototype.forEach;

const d = document;

// Remove deleted posts by IDs from localStorage
var deleted = JSON.parse(localStorage.getItem('postsD'));
if (deleted) {
    deleted.forEach(id => {
        d.getElementById(id).remove();
    });
}

// Posts
var posts = d.querySelectorAll('.b-post');

posts.forEach(post => {
    
    // Create cross
    var cross = d.createElement('div');
    cross.classList.add('b-post__delete');
    cross.innerHTML = 'x';
    
    // Remove post
    cross.addEventListener('click', e => {
        
        // Remember post ID in localStorage
        var deleted = JSON.parse(localStorage.getItem('postsD')) || [];
        deleted.push(post.id);
        localStorage.setItem('postsD', JSON.stringify(deleted));
        
        // Remove post form page
        post.remove();
    })
    
    // Insert cross into post
    post.appendChild(cross);
});