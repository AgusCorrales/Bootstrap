document.addEventListener('DOMContentLoaded', function() {
     const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
     const usersContainers = document.getElementById('usersContainers');
     console.log('saved users', savedUsers);
     console.log('users contaier', usersContainers);
     for (let i = 0; i < savedUsers.length; i++) {
         const cardUsers = document.createElement('div');
         cardUsers.classList.add('col-md-4', 'mb-4');
         cardUsers.innerHTML = `
         <div class="card">
             <div class="card-body">
                 <h5 class="card-title">${savedUsers[i].name}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${savedUsers[i].email}</h6>
             </div>
         </div>`;
     usersContainers.appendChild(cardUsers);
     }
 })