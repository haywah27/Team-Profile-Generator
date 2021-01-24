module.exports = {


employee: function Employee(name, id){

},

manager: function Manager(name, title, id, email, office){
    let manager = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./Assets/style.css">
        <title>Team Profile</title>
    </head>
    <body>
      <div id="page-container">
    
        <section class="hero is-small is-bold" id="jumbotronStyle">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="display-3">Meet the Team!</h1> 
            </div>
          </div>
        </section>
    
        <div class="container columnWid">
          <div class="section">
            <div class="row columns is-multiline is-centered">
      
              <div class="column is-4 cardWidth">
                <div class="card cardWidth cardBorder">
                  <div class="card-content cardHeader">
                    <p class="title cardHeader">${name}</p>
                    <p class="subtitle cardHeader"><i class="fas fa-mug-hot iconColor"></i>&ensp; ${title}</p>
                  </div>
                  <div class="card-content">
                    <footer class="cardBorderLight">
                      <p class="card-content footerSize">ID: ${id}</p>
                    </footer>
                    <footer class="cardBorderDark">
                      <p class="card-content footerSize">Email: ${email}</p>
                    </footer>
                    <footer class="cardBorderLight">
                      <p class="card-content footerSize">Office Number: ${office}</p>
                    </footer>
                  </div>
                </div>
              </div>
    
            </div>
          </div>  
        </div>
    
      </div>
    </body>
    </html>`
    return manager;
},

engineer: function Engineer(name, id, role){

},

intern: function Intern(name, id, role){
    
}
}