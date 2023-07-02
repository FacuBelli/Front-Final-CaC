const {createApp} = Vue 
createApp({
    data(){
        return{
            productos: [],
            url: "http://127.0.0.1:5000/productos",
            cargando: true,
            error: false,

            id:0,
            nombre:"",
            imagen:"",
            stock:0,
            precio:0,

        }
        
    },

    methods:{
        fetchData(url){
            fetch(this.url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;
            })
            .catch(err =>{
                console.log(err);
                this.erro = true;
            })
        },

        eliminar(producto){
            const url = "http://santiagol.pythonanywhere.com/productos" + producto;
            let options = {
                method: "DELETE",
            }

            fetch(url, options)
            .then(response => response.json)
            .then(data => {
                location.reload();
            })
            .catch(err =>{
                console.error(err)
            })
        },
        grabar(){
            let producto = {
                nombre:this.nombre,
                precio:this.precio,
                stock:this.stock,
                imagen:this.imagen,
            }
            var options = {
                body:JSON.stringify(producto),
                method :"POST",
                headers:{"Content-Type": "applicattion/json"},
                redirect: "follow"
            }
            fetch(this.url, options)
                .then(function (){
                    alert("Registro grabado")
                    window.location.href = "productos.html"
                })
                .catch(err =>{
                    console.error(err);
                    alert("Error al grabar")
                })
        }


    },


    created(){

        this.fetchData(this.url);

    }
}).mount("#app")

