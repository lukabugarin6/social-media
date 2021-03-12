const express = require("express");
const router = express.Router();
const auth = require('../../middleware/auth')


// @route     GET api/posts
// @desc      Test route
// @access    Public
router.get("/", (req, res) => {
   var a = 5

   function outer() {
      console.log(a)
      var a = 4
   }
   outer()

    res.send("Posts route")
})

module.exports = router;
