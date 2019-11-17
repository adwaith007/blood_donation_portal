const express = require('express');
const engine = require('ejs-locals');
const app=express();
app.engine('ejs', engine);
app.set('view engine', 'ejs');


// const yourRouterFile = require('/path/to/your/router/file');

const router = express.Router();

router.get('/test', (req, res) => {
  res.json({success: true});
});
router.get("/test/template",(req,res)=>{
  res.render("base",{});
})

// Make modifications here
// router.use(yourRouterFile);

module.exports = router;