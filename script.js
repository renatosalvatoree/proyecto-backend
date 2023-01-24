class ProductManager {
    constructor()
    {
        this.nextId = 0;
        this.products = [];
    }
    addProduct(title, description, price, thumbnail, code, stock){
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


