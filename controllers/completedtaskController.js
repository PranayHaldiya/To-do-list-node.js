const db = require('../config/mongoose');
const Dashboard = require('../models/dashboard');


module.exports.completedtask = function(req, res){
    const data = Dashboard.find({})
    .then(function(data){
      //  User.findOne({email : "pranayhaldiya8127@gmail.com"})
       // .then(function(user){
           // console.log(`**********user`, user.name);
        return res.render('completedtask', {
            title: "Dashboard",
          //  name: user.name,
            dashboard: data
        });
    //})
    })
    .catch(function(err){
        console.log('Error', err);
        return;
    });
}
