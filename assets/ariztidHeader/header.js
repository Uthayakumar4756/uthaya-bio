document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="
      background-color: blanchedalmond !important;
  ">
            <div class="container-fluid">
              <a class="navbar-brand" href="../userLogin.html">HOME</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" href="../resume.html">RESUME</a>
                  
                </div>
              </div>
            </div>
        </nav>
        <style>.nav-link-danger.left {
      position: absolute; /* Position relative to the nearest positioned ancestor */
      left: 90%; 
      top: 10px;
      background-color: red;
      color: white; 
      padding: 10px; 
      text-decoration: none; 
      font-size: small;
  }
  </style>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  
    // Add click event listener to the logout button
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', function() {
      window.location.href = '../login.html'; // Redirect to userlogin.html
    });
  });
  