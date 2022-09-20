class Inventory{
    constructor(){
        this.products = [];
    }

    addproduct(product){
        this.products.push(product);
        console.log(" se agrego el producto")
    }

    lista(){
        let list = " ";
        for (let x = 0; x < this.products.length; x++) {
            list += this.products[x].info();
        }
        return list;
    }


}

class Product{
    constructor(nombre, codigo, cantidad, costo){
        this.nombre = nombre;
        this.codigo = codigo;
        this.cantidad = cantidad;
        this.costo = costo
    }

    nombre(){
        return this.nombre;
    }
    codigo(){
        return this.codigo;
    }
    cantidad(){
        return this.cantidad;
    }
    costo(){
        return this.costo
    }

    info(){
        return `nombre:${this.nombre}, codigo:${this.codigo}, cantidad:${this.cantidad}, costo:${this.costo}`;
    }
}

let inventory = new Inventory();
let addproductt = document.getElementById('add');

addproductt.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let codigo = document.getElementById('codigo').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;
    let productt = new Product (nombre, codigo, cantidad, costo);
    let savepro = inventory.addproduct(productt);
    document.getElementById('inventory').innerHTML = '<ul></ul>'
})