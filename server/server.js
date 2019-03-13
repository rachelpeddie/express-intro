
// sourcing in 'express' file from node-modules
const express = require('express'); // without ./ (file path) js will look for this within 'node-modules' directory

// get an instance of express - this will run server
const app = express();

// tell js to use public directory made for static files
app.use(express.static('server/public')); // no ./ because js is looking via context of project

// tells server to listen to this specific port, so we know where to go to preview webpage
const port = 5000;

// sets up server to listen on specific port -- entry point for code
app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
});


// everything above this line will be used EVERY time express is used.  This can be copy and pasted into server file every time

// array of stuff to send back
let catArray = ['Tuna', 'Mackerel'];
let dogArray = ['Winston', 'Ruby'];
// we can get things that aren't in the file

app.get('/cats', function(req, res){
    console.log(`in get cats`); // this will return in terminal each time page is refreshed
    // good servers always respond
    res.send(catArray); // sending catArray back as response
}) // /cats is a new page within port, req and res are ONLY used within curly braces

app.get('/dogs', (req, res) =>{
    console.log(`in get dogs`);
    res.send(dogArray);
}) // in this case, req and res are TOTALLY different variables than in the previous function -- they're parameters that are accepted into the function

// don't use arrow functions on client side, only server side