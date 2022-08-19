# fragrance

A fullstack CRUD application hosted on Heroku with MongoDB backend intended to store information about house and personal care products safe for people with fragrance allergies/sensitivities. 

<img width="800" alt="Screen Shot of Scentsitive Fragrance Products home page" src="https://user-images.githubusercontent.com/102367926/184971808-a8fa47d9-31a3-4032-8cc4-5d8d56ea88d8.png">
<img width = "800 alt = "screenshot of page to add information" src="https://user-images.githubusercontent.com/102367926/185188253-f7e0288e-ab81-4f19-8c4c-3f3eb538773f.png">

https://scentsitveproducts.herokuapp.com/

### How it's made

tech used: EJS, CSS, Javascript, Node, Express, MongoDB

Two EJS pages can be rendered. The index provides a table with products, brands, and product type as well as likes. The "adds" page is similar, but allow for deletion rather than likes and has an html form to add new products to the Mongo data base. 

### Optimizations
- Add login so only authorized users can delete and add products.
- Ability to sort products by likes, type, or brand.
- Ability to search for particular brands or products by name.
- Add responsive 

### Lessons learned
This is the first product I had to manually walk through the DOM to extract information, so a lot of time was dedicated to understanding how to select information using client side JS to be passed back to the server or on to the database. Learned some new behaviors of MongoDB. This is also only the second time I have had reason to use EJS, so using EJS to make a table rather than a list. 
