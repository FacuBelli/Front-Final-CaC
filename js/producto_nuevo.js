const {createApp} = Vue 
createApp({
    data(){
        return{
            productos: [],
            url: "http://127.0.0.1:5000/productos",
            cargando: true,
            error: false,

            id:3,
            nombre:"",
            imagen:"",
            stock:0,
            precio:0,

        }
        
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;
            })
            .catch(err =>{
                console.error(err);
                this.error = true;
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
                headers:{"Content-Type": "application/json"},
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
