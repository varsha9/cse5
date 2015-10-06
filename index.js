var express = require('express');
var app = express();



app.use(express.static(__dirname  + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



var quotes = [
  { author : 'Alexander Graham Bell', text : "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us."},
  { author : 'Erica Jong',            text : "Advice is what we ask for when we already know the answer but wish we didn't."},
  { author : 'Unknown',               text : "Even the greatest was once a beginner. Don't be afraid to take that first step."},
  { author : 'Neale Donald Walsch',   text : "You are afraid to die, and you're afraid to live. What a way to exist."},
  { author : 'Dr. Seuss',             text : "Be who you are and say what you feel because those who mind don't matter and those who matter don't mind."},
  { author : 'Lou Holtz',             text : "Never tell your problems to anyone...20% don't care and the other 80% are glad you have them."},
  { author : 'Unknown Author',        text : "When life gives you a hundred reasons to cry, show life that you have a thousand reasons to smile."},
  { author : 'Shing Xiong',           text : "In the end, it's not going to matter how many breaths you took, but how many moments took your breath away"},
  { author : 'Margaret Mead',         text : "Always remember that you are absolutely unique. Just like everyone else."},
  { author : 'Oscar Wilde',           text : "Be yourself; everyone else is already taken."}


];

app.listen(process.env.PORT || 5000);

app.get('/', function(request, response)
{
  response.render('pages/index');
});

app.get('/quotes', function(req, res) {
  res.json(quotes);
});