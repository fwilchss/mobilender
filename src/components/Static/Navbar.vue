<template>
    <div class="container-fluid">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <div class="container">            
                <b-navbar-brand :to="{name:'home'}">Integra <span class="c-verde" >Software</span></b-navbar-brand>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item :to="{name: 'creditos-grupales'}" exact>Créditos</b-nav-item>
                            <b-nav-item :to="{name: 'listado-de-software'}" exact>Software</b-nav-item>
                        </b-navbar-nav>
                        <b-navbar-nav class="ml-auto">
                            <b-navbar-nav right class="nav-user">
                                <b-nav-text>{{ $store.getters.getUsuario.usuario }}</b-nav-text>
                            </b-navbar-nav>
                            <b-navbar-nav >
                                <div class="circle" right>{{$store.getters.getUsuario.siglas}}</div>
                            </b-navbar-nav>
                            <b-nav-item-dropdown right>
                                <template #button-content>
                                    <em></em>
                                </template>
                                <b-dropdown-item v-on:click="logOut">Logout</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-navbar-nav>
                    </b-collapse>
                </div>
        </b-navbar>
    </div>
</template>
<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                activeCredito : false,
                activeSotware : false
            }
        },
        methods:{
            logOut(){
                console.log("cerra sesion");
                this.$router.push('login');
            }
        }
    }
</script>

<style>
    #app{
        margin: inherit;
    }
    
    div{
        color: #fff;
    }
    .c-verde{
        color: #79FAB6;
    }
    .bg-info {
        background-color: #181925 !important;
    }
    .nav-user {
        margin-right: 20px;
        color: #fff !important;
    }
    .circle {
        width: 35px;
        height: 35px;
        background-color: #fff;
        color: #000;
        border-radius: 50%;
        padding: 7px 5px;
        font-size: 15px;
    }

    .router-link-exact-active.router-link-active{
        color: #fff !important;
        font-weight: bold;
    }
</style>
