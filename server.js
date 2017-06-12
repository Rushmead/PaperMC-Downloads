const express = require('express');
const axios = require('axios');


const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


app.get('/api/downloads', (req, res) => {
  axios.get('https://ci.destroystokyo.com/job/PaperSpigot/api/json?pretty=true').then(response => {
            const data = response.data.builds;
            var downloads = [];
            data.forEach(function(download) {
              downloads.push(download.number);
            }, this);
            res.json(downloads);
    });
});

app.get('/api/build/:number', (req, res) => {
  axios.get('https://ci.destroystokyo.com/job/PaperSpigot/' + req.params.number + '/api/json?pretty=true').then(response => {
     const data = response.data.changeSet.items;
     var changes = [];
     data.forEach(function(change) {
        changes.push(change.msg);
     }, this);
     res.json({changelog: changes});
  });

});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});