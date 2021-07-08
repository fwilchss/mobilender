<template>
    <div class="vertical-center">
        <div class="inner-block">
            <div class="vue-template">
                <form v-on:submit.prevent="loginUser">
                    <h1>Integra <span class="c-verde" >Software</span></h1>
                    <div class="form-group">
                        <label>Correo electrónico</label>
                        <input type="email" class="form-control form-control-lg" v-model="correo" />
                    </div>
                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control form-control-lg" v-model="password" />
                    </div>
                    <b-alert name="msnErrorLogin" variant="danger" :show="msnErrorLogin">Revise su correo o contraseña</b-alert>
                    <button type="submit" class="btn btn-dark btn-lg btn-block">
                        Iniciar sesión
                    </button>
                    <p class="forgot-password text-right mt-2 mb-4">
                        <router-link :to="{name:'forgot-password'}">¿Olvidaste tu contraseña?</router-link>
                    </p>
                    <p class="forgot-password text-right">
                        Registrate 
                        <router-link :to="{name: 'signup'}">áqui</router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data () {
        return {
            correo:'admin@correo.com',
            password:'admin',
            msnErrorLogin: false
        }
    },
    created(){

        var uri = this.$route.params;

        if(uri.email != undefined)
            this.correo = uri.email;
        else
            this.correo = 'admin@correo.com';

        if(uri.password != undefined)
            this.password = uri.password;
        else
            this.password = 'admin';

    },
    methods: {
        loginUser(){
            var correo = this.correo;
            var password = this.password;
            var url = "http://localhost:4000/usuarios?email="+correo+"&password="+password;

            this.$http.get(url).then(
                response => {
                    if(response.body[0] != undefined && response.body[0].id > 0) {
                        var fullName = response.body[0].fullName;
                        var nombre = fullName.split(" ");
                        var apellido = '';
                        this.$store.state.usuario = '';
                        this.$store.state.siglas = '';

                        if(nombre[1] === undefined)
                            apellido = nombre[0][1];
                        else
                            apellido = nombre[1][0];
                        
                        this.agregarUsuarioAStore(nombre[0], apellido);
                        
                        this.msnErrorLogin = false;
                        this.$router.push('home');
                    } else {
                        this.msnErrorLogin = true;
                    }
                }).catch(error => {
                    console.log(error)
                }
            )
        },
        agregarUsuarioAStore(nombre, apellido){
            this.$store.state.usuario = nombre;
            this.$store.state.siglas = nombre[0]+apellido;
            this.$store.dispatch('addUsuario');
        }
    } 
}
</script>

<style>
    form {
        color: #000 !important;
    }

    label{
        color: #000;
    }
    
    h1{
        text-align: center;
    }
</style>