const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]

  }).then(response => res.json(response))
  .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {id: req.params.id},
    include: [Product]
  }).then(response => res.json(response))
  .catch(err => res.json(err))
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(response => res.json(response))
  .catch(err => res.json(err))
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where: {id: req.params.id},
  }).then(response => res.json(response))
  .catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {id: req.params.id},
  }).then(response => res.json(response))
  .catch(err => res.json(err))
});

module.exports = router;
