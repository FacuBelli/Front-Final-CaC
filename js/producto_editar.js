console.log(location.search); // Lee los argumentos pasados a este formulario
// var id = location.search.substring(4); // Obtén solo el valor del parámetro de búsqueda sin el signo de interrogación y el igual
var searchParams = new URLSearchParams(window.location.search);
var id = searchParams.get('id');
console.log(id);
const { createApp } = Vue;
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            imagen: "",
            stock: 0,
            precio: 0,
            url: 'http://santiagol.pythonanywhere.com/productos/' + id,
        };
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.id = data.id;
                    this.nombre = data.nombre;
                    this.imagen = data.imagen;
                    this.stock = data.stock;
                    this.precio = data.precio;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                });
        },
        modificar() {
            let producto = {
                nombre: this.nombre,
                precio: this.precio,
                stock: this.stock,
                imagen: this.imagen
            };
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
            };
            // fetch(this.url, options)
            fetch(this.url, options)
                .then(() => {
                    alert("Registro modificado");
                    window.location.href = "./productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al modificar");
                });
        }
    },
    created() {
        this.fetchData(this.url);
    },
}).mount('#app');
