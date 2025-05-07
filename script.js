document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    this.style.display = 'none';
    const msg = document.getElementById('form-message');
    msg.style.display = 'block';
    msg.textContent = '🎉 ¡Gracias por suscribirte al boletín de Nintendo Switch 2!';
});

document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('user').value;
    const comment = document.getElementById('comment').value;
    const commentsList = document.getElementById('comments-list');

    const newComment = document.createElement('div');
    newComment.innerHTML = `<p><strong>${user}</strong>:</p><p>${comment}</p>`;
    commentsList.prepend(newComment);

    this.reset();
});