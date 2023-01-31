productManager = new ProductManager();
productManager. addProduct (null, "", "", "", "", "") //este deberia fallar
productManager. addProduct ("Pan", "es un pan", "$2", "foto.png", 12, 10) //estos no
productManager. addProduct ("Queso", "es un queso", "$2", "foto.png", 13, 10)
productManager. addProduct ("Leche", "es leche", "$2", "foto.png", 14, 10)
productManager.addProduct("Te", "es te", "$2", "foto.png", 12, 10); //este  falla porque se repite el codigo 12
let products = productManager.getProducts()
console. log (products) //devuelve la lista de productos
let pancito = productManager.getProductById(O)
console. log (pancito.title) //deberia devolver Pan
productManager.getProductById(10) //deberia decir que no se encontro