<template>
    <div class="vertical-center">
        <div class="inner-block">
            <div class="vue-tempalte">
                <form v-on:submit.prevent="getUser">
                    <h1>Integra <span class="c-verde" >Software</span></h1>
                    <h4 class="text-center">Recuperar cuenta</h4>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-lg" v-model="correo" placeholder="Correo electrónico" ref="correo" />
                    </div>
                    <b-alert :variant="variant" :show="msnSendMail">{{msn}}</b-alert>
                    <button type="submit" class="btn btn-dark btn-lg btn-block">Enviar</button>
                    <p class="forgot-password text-right">
                        Regresar a 
                        <router-link :to="{name: 'login'}">login</router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ForgotPassword',
        data () {
            return {
                msnSendMail: false,
                correo:'',
                variant:'',
                msn : ''
            }
        },
        methods: {
            getUser(){
                var correo = this.correo;

                if(correo == ''){
                    this.msnSendMail = true;
                    this.variant = 'danger';
                    this.msn = 'Ingrese su correo electrónico';
                    this.$refs.correo.focus();
                } else {
                    this.msnSendMail = true;
                    this.variant = 'success';
                    this.msn = 'El correo se envío con éxito';
                }
            }
        } 
    }
</script>
<style>
    form {
        color: #000 !important;
    }
    h3{
        color: #000;
    }
    h1{
        text-align: center;
    }
</style>