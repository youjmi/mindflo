const router = require("express").Router();
const blogsController = require("../controllers/blogsController");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');



const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads');
  },
  // filename: function(req, file, cb){
  //   cb(null, uuidv4() + '-')
  // }
})

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
} else {
    cb(null, false);
}
}

let upload = multer({ storage, fileFilter });


// Matches with "/blog"
router.route("/blog/uploads")
  .get(blogsController.findAll)
  .post(upload.single('photo'), blogsController.create);

// Matches with "/api/blogs/:id"
router
  .route("/blog/:id")
  .get(blogsController.findById)
  .put(blogsController.update) 
  .delete(blogsController.remove);

module.exports = router;
