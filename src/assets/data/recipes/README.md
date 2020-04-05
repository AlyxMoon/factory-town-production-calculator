At the moment, I'm sorting recipes by the building they are produced in. The format for a recipe is:
If anything would be more than one word, it will be camelCased.

- `name`: the name of the recipe,
- `quantity`: amount of items produced per recipe,
- `time`: the time the recipe takes, in seconds
- `building`: the building this recipe is made in,
- `outputs`: kind of unsure about how to store this. For recipes with multiple outputs (such as pasture recipes) I'm storing each output item in an array with name/quantity.
- `ingredients`: an array of every ingredient used in the recipe. If no ingredients, should be an empty array. Contains name/quantity

```
{
  "name": STRING,
  "quantity": NUMBER,
  "time": NUMBER,
  "building": STRING,
  "outputs": [
    {
      "name": STRING,
      "quantity": NUMBER
    },
    {
      "name": STRING,
      "quantity": NUMBER
    }
  ],
  "ingredients": [
    {
      "name": STRING,
      "quantity": NUMBER
    },
    {
      "name": STRING,
      "quantity": NUMBER
    }
  ]
}
```