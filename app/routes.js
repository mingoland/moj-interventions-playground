const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
/*
router.post('/pp-form-v01/making-referral-needs-and-risks', function(req, res){

})
*/
router.get('/pp-form-v01/making-referral-needs-and-risks', function(req, res){
  var users = {
    'GB123456' : 'Alex',
    'EN000001' : 'Gary'
  }
  res.render(users:users)
})
module.exports = router
