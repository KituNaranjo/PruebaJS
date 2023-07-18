$(document).ready(() => {
    const registerForm = $('#registerForm');
    const usersList = $('#usersList');
  
    registerForm.submit((event) => {
      event.preventDefault();
  
      const username = $('#username').val();
      const password = $('#password').val();
  
      $.ajax({
        type: 'POST',
        url: '/register',
        data: { username, password },
        success: (response) => {
          alert(response.message);
          registerForm[0].reset();
        },
        error: (error) => {
          alert('Error al registrar el usuario');
        }
      });
    });
  
    $.ajax({
      type: 'GET',
      url: '/users',
      success: (users) => {
        users.forEach((user) => {
          usersList.append(`<li>${user.username}</li>`);
        });
      },
      error: (error) => {
        alert('Error al recuperar el usuario');
      }
    });
  });
  