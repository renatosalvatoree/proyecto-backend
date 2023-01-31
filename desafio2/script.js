const fs = require('fs').promises

class ProductManager {
    constructor(path)
    {
        this.path = path
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
                found = false
                return;
            }
            const newProduct = new Product(title, description, price, thumbnail, code, stock, this.nextId)
            this.products.push(newProduct)
            this.nextId++
            let contenidoJSON = JSON.stringify(this.products) //parte nueva
            fs.writeFile(this.path, contenidoJSON) //parte nueva
}
}
    async getProducts(){
        let n = fs.readFile(this.path, 'utf-8')
        if(n == null){
            console.log("Todavia no se almaceno ningun producto.")
        } else {
            let contenidoJSON  = await fs.readFile(this.path, 'utf-8')
            let contenido = JSON.parse(contenidoJSON)
            return contenido;
        }
    }
    async getProductById(id){
        let contenidoJSON = await fs.readFile(this.path, 'utf-8')
        let contenido = JSON.parse(contenidoJSON)
        let product = null;
        contenido.forEach(element => {
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

    async deleteProduct(id){
        let contenidoJSON = await fs.readFile(this.path, 'utf-8')
        let contenido = JSON.parse(contenidoJSON)
        contenido.splice(id, 1)
        contenido.splice(id,0,{})
        await fs.writeFile(this.path, JSON.stringify(contenido))
    }

    async updateProduct(id, update){
        let contenidoJSON = await fs.readFile(this.path, 'utf-8')
        let contenido = JSON.parse(contenidoJSON)
        let product = null;
        contenido.forEach(element => {
            if(element.id == id ){
                product = element;
            } 
        });
        if(product == null){
            console.log('not found')
            return;
        } 
        if(update.title != undefined){
            product.title = update.title
            await fs.writeFile(this.path, JSON.stringify(contenido))
        } 
        if(update.description != undefined){
            product.description = update.description
            await fs.writeFile(this.path, JSON.stringify(contenido))
        } 
        if(update.price != undefined){
            product.price = update.price
            await fs.writeFile(this.path, JSON.stringify(contenido))
        } 
        if(update.thumbnail != undefined){
            product.thumbnail = update.thumbnail
            await fs.writeFile(this.path, JSON.stringify(contenido))
        } 
        if(update.code != undefined){
            product.code = update.code
            await fs.writeFile(this.path, JSON.stringify(contenido))
        } 
        if(update.stock != undefined){
            product.stock = update.stringify
            await fs.writeFile(this.path, JSON.stringify(contenido))
        } 
    }

    async prueba(){
        let contenido  = await fs.readFile(this.path, 'utf-8')
        console.log(contenido)
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
productManager = new ProductManager('./productos.txt')
productManager. addProduct ("Pan", "es un pan", "$2", "foto.png", 12, 10)
productManager. addProduct ("Queso", "es un queso", "$2", "foto.png", 13, 10)
productManager. addProduct ("Leche", "es leche", "$2", "foto.png", 14, 10)
let products = productManager.getProductById(1) //Muestra el producto con id 1
products.then((response) => {
    console.log(response);
    })
productManager.deleteProduct(1).then((r) => //lo elimina
{ 
    productManager.getProductById(1); //muestra que se elimino
    productManager.updateProduct(0, {"title":"Pera"}).then((v) =>{ //le cambia el titulo al producto id 0
        products = productManager.getProductById(0); //muestra el cambio
        products.then((response) => {
        console.log(response);
    })
    });
    
})
