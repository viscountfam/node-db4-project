const express = require('express')

const recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    recipes.find()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes'})
    })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    recipes.findById(id)
    .then(recipe => {
        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({ message: 'Could not find recipe with given id'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes'});
    });
});

router.get('/:id/ingredients', (req, res) => {
  const { id } = req.params;

  recipes.findingredient(id)
  .then(ingredients => {
    if (ingredients) {
      res.json(ingredients)
    } else {
      res.status(404).json({ message: 'Could not find the ingredients for the recipe with the given id'})
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get the ingredients'});
  })
})

router.get('/:id/directions', (req, res) => {
  const { id } = req.params;

  recipes.finddirection(id)
  .then(directions => {
    if (directions) {
      res.json(directions)
    } else {
      res.status(404).json({ message: 'Could not find the directions for the recipe with the given id'})
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get the directions'});
  })
})

router.post('/', (req, res) => {
    const recipeData =  req.body;

    recipes.add(recipeData)
    .then(recipe => {
        res.status(201).json(recipe);
    })
    .catch (err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to create new recipe'})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params.id;
    const changes = req.body;
  
    recipes.findById(id)
    .then(recipe => {
      if (recipe) {
        Schemes.update(changes, id)
        .then(updatedrecipe => {
          res.json(updatedrecipe);
        });
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update recipe' });
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    recipes.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find scheme with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete scheme' });
    });
  });

  module.exports = router;