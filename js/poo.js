//alert("CRUD POO JS")
class Producto{
    constructor(nombre, precio, anioCreacion){
        this.nombre=nombre;
        this.precio=precio;
        this.anioCreacion=anioCreacion;
    }
}

class IU{
    adicionarProducto(producto){
        var resultado=document.getElementById('resultado');
        var elemento=document.createElement('div');
        elemento.innerHTML=
        `<div class="card text-white bg-success mb-3" style="max-width: 20rem;">
           <div class="card-header">
            <strong>Producto: </strong>`+producto.nombre+`
           </div>
           <div class="card-body">
             <h4 class="card-title">
               <strong>Precio: </strong>`+producto.precio+ `</h4>
               <p class="card-text">
                 <strong> Año de creación:</strong>`+producto.anioCreacion+`
               </p>
           </div>
         </div>`;
        resultado.appendChild(elemento);

    }
    editarProducto(){
        
    }
    eliminarProducto(){
        
    }
    mensajes(){
        
    }
}

/* document.getElementById('product-form').addEventListener('submit',function(){
    alert('Alerta dom form submit')
    }) */
//paso 27 y 29 y 30 y 31
document.getElementById('product-form').addEventListener('submit',function(e){
    //alert(document.getElementById('nombre').value);
    var nombre=document.getElementById('nombre').value;
    var precio=document.getElementById('precio').value;
    var anio=document.getElementById('anio').value;
    console.log(nombre+' '+precio+' '+anio);

    var producto=new Producto(nombre,precio,anio); //paso 33
    // console.log(producto);
    
    var iu=new IU();
    iu.adicionarProducto(producto);

    e.preventDefault();
});
//PASO 33
//A continuación, creamos un nuevo objeto llamado producto enviando los datos del formulario
//como atributos del objeto a través de la clase constructora:



