<template>
    <div class="vertical-center">
        <div class="inner-block">
            <div class="vue-tempalte">
                <form v-on:submit.prevent="setUser">
                    <h1>Integra <span class="c-verde" >Software</span></h1>
                    <h4 class="text-center">Registro nuevo</h4>

                    <div class="form-group">
                        <label>Nombre completo</label>
                        <input type="text" class="form-control form-control-lg" v-model="nombre" ref="nombre" />
                    </div>

                    <div class="form-group">
                        <label>Correo electrónico</label>
                        <input type="email" class="form-control form-control-lg" v-model="correo" ref="correo"/>
                    </div>

                    <div class="form-group">
                        <label>Contraseña</label>
                        <input type="password" class="form-control form-control-lg" v-model="password" ref="password"/>
                    </div>
                    
                    <b-alert :variant="variant" :show="msnErrorSet">{{msn}}</b-alert>

                    <button type="submit" class="btn btn-dark btn-lg btn-block">Registrate</button>

                    <p class="forgot-password text-right">
                        Ya estoy registrado 
                        <router-link :to="{name: 'login'}">Iniciar sesión</router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Signup',
        data () {
            return {
                nombre:'',
                correo:'',
                password:'',
                variant:'',
                msnErrorSet:'',
                msn:''
            }
        },
        methods: {
            setUser(){
                var fullName = this.nombre;
                var email = this.correo;
                var password = this.password;
                
                var url = "http://localhost:4000/usuarios";

                var myObj = {
                    "email":email,
                    "password":password,
                    "fullName":fullName
                };

                if(fullName == ''){
                    this.msnErrorSet = true;
                    this.variant = 'danger';
                    this.msn = 'Ingresa el nombre completo';
                    this.$refs.nombre.focus();
                    return
                } else {
                    this.msnErrorSet = false;
                    this.msn = '';
                    this.variant = '';
                }

                if(email == ''){
                    this.msnErrorSet = true;
                    this.variant = 'danger';
                    this.msn = 'Ingresa el correo electrónico';
                    this.$refs.correo.focus();
                    return
                } else {
                    this.msnErrorSet = false;
                    this.msn = '';
                    this.variant = '';
                }

                if(password == ''){
                    this.msnErrorSet = true;
                    this.variant = 'danger';
                    this.msn = 'Ingresa la contraseña';
                    this.$refs.password.focus();
                    return
                } else {
                    this.msnErrorSet = false;
                    this.msn = '';
                    this.variant = '';
                }

                this.$http.post(url,myObj)
                .then(response => {
                    if(response.body != undefined && response.body.id > 0){
                        this.msnErrorSet = true;
                        this.msn = 'El registro se creo con éxito';
                        this.variant = 'success';
                        setTimeout(() => {
                            this.$router.push('login');
                        }, 3000);
                    } else {
                        this.msnErrorSet = true;
                        this.variant = 'danger';
                        this.msn = 'El registro no se pudo crear'
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        },
        created(){
            console.log("entrooo")
        } 
    }
</script>
<style >
    form, label {
        color: #000 !important;
    }
    h1{
        text-align: center;
    }
</style>