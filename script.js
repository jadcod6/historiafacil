function showTopic(title,text){document.getElementById('modal-title').textContent=title;document.getElementById('modal-text').textContent=text;document.getElementById('modal').classList.add('show')}
function closeModal(event){if(!event||event.target.id==='modal'||event.target.classList.contains('close'))document.getElementById('modal').classList.remove('show')}
