const db = require('../config/mongoose');
const Dashboard = require('../models/dashboard');


module.exports.dashboard = function(req, res){
    const data = Dashboard.find({})
    .then(function(data){
      //  User.findOne({email : "Amanhaldiya512@gmail.com"})
      //  .then(function(user){
        return res.render('dashboard', {
            title: "Dashboard",
            // name: user.name,
            dashboard: data
        }
                         );
    
    })
    .catch(function(err){
        console.log('Error', err);
        return;
    });
}
