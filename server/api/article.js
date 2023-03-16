const { Article } = require("../mongoose/model");


/*
  몽구스에서 model에 관한 기능 제공중 
  ex) Article.findById(id)
  https://mongoosejs.com/docs/api/model.html
*/

// CREATE
const articleCreate = async (req, res) => {
  const { content } = req.body;
  const newArticle = await Article({ content });
  const saveRequest = await newArticle.save();
  console.log("create article: ", saveRequest);
  res.send(saveRequest);
};

// READ
const articleRead = async (req, res) => {
  const articles = await Article.find({});
  res.send(articles);
};

// FIND ONE
const articleFindOne = async (req, res) => {
  const { id } = req.params;
  const article = await Article.findById(id);
  res.send(article);
};

// UPDATE
const articleUpdate = async (req, res) => {
  const { id, content } = req.body;
  const updatedArticle = await Article.findByIdAndUpdate(id, { content });
  res.send(updatedArticle);
};

// DELETE
const articleDelete = async (req, res) => {
  const { id } = req.params;
  const deleteArticle = await Article.findByIdAndDelete(id);
  res.send(deleteArticle);
};

module.exports = {
  articleCreate,
  articleRead,
  articleFindOne,
  articleUpdate,
  articleDelete,
};
