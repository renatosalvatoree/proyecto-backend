class ProductManager {
    constructor()
    {
        this.nextId = 0;
        this.products = [];
    }
    addProduct(title, description, price, thumbnail, code, stock){
        let found;
        if (title == null || description == null || price == null || thumbnail == null || code == null || stock == null){
            console.log("Por favor, completa todos los datos");
            return;
        } else {
            this.products.forEach(element => {
                if (element.code == code){
                    console.log("Ya existe un producto con este codigo");
                    found = true;
                }
            });
            if(found){
            return;
            }
            const newProduct = new Product(title, description, price, thumbnail, code, stock, this.nextId)
            this.products.push(newProduct)
            this.nextId++
        }
}
    getProducts(){
        return this.products;
    }
    getProductById(id){
        let product = null;
        this.products.forEach(element => {
            if(element.id == id ){
                product = element;
            } 
        });
        if(product == null){
            console.log("Not found")
        return;
        } else {
            return product;
        }
    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock, id){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock= stock;
        this.id = id;
    }
}

//Aca comienza el codigo de prueba
productManager = new ProductManager();
productManager. addProduct (null, "", "", "", "", "") //este deberia fallar
productManager. addProduct ("Pan", "es un pan", "$2", "foto.png", 12, 10) //estos no
productManager. addProduct ("Queso", "es un queso", "$2", "foto.png", 13, 10)
productManager. addProduct ("Leche", "es leche", "$2", "foto.png", 14, 10)
productManager.addProduct("Te", "es te", "$2", "foto.png", 12, 10); //este  falla porque se repite el codigo 12
let products = productManager.getProducts()
console. log (products) //devuelve la lista de productos
let pancito = productManager.getProductById(0)
console. log (pancito.title) //deberia devolver Pan
productManager.getProductById(10) //deberia decir que no se encontro


