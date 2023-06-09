const pageState = function(){
    let currentState = new homeState(this);

    this.init = function(){
        this.chamge(new homeState);
    }

    this.change = function(){
        currentState = state;
    }
};

// home state 
const homeState = function(page){
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
        <h1 class="display-3">Hello, world</h1>
        <p class="lead"> This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>it uses utility classes for typography and spacing to space content out within the larger containner. </p>
        <p cllass="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">learn more</a>
        </p>
        </div>
    `;
};

// about state
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
    <p>This is the about page </p>
    
    `;
};
// contact state
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'contact Us';
    document.querySelector('#content').innerHTML = `
    <form>
    <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input type="email" class="form-control">
    </div>
    <button type="submit" class="btn btn-primary">Submit>/button>
    </form>
    
    `;
};

// instantiate pagestate 
const page = new pageState();

// init the first state 
page.init();

// ui variables 
const home = document.getElementById('home'),
about = document.getElementById('about'),
contact = document.getElementById('contact');

// home 
home.addEventListener('click', (e) =>{
page.change(new homeState);

e.preventDefault();
});
// about 
home.addEventListener('click', (e) =>{
page.change(new aboutState);

e.preventDefault();
});
// contact
home.addEventListener('click', (e) =>{
page.change(new contactState);

e.preventDefault();
});