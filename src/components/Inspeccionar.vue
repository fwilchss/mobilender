<template>
    <div id="control-de-cambios">
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <Breadcrumb bloque="inspeccionar"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <Return url="creditos-grupales"/>
                    <h1><i class="fas fa-search-plus color-v title"></i> Inspeccionar</h1>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-12">
                    <hr/>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-12">
                    <label class="sr-only" for="inline-form-input-username">Username</label>
                    <b-input-group size="lg" prepend-html="<i class='fas fa-search'></i>" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-form-input id="inline-form-input-username" placeholder="N° Cliente, crédito, ID..." v-on:keyup="buscando" v-model="buscar"></b-form-input>
                        <b-input-group-append>
                            <b-button class="input-group-text " v-on:click="limpiaritems"><i class='fas fa-times' ></i></b-button>
                        </b-input-group-append>
                    </b-input-group>
                    <div class="mt-3 encontrados">{{encontrados}}</div>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-12">
                    <div class="cont-table">
                        <table class="table b-table tab-table" widht="100%">
                            <thead>
                                <tr>
                                    <th>Cliente</th>
                                    <th>Rfc</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" v-bind:key="item.id">
                                    <td><img class="circle-img" :src="getImgUrl(item.foto)" v-bind:alt="item.nombre"> &nbsp;&nbsp;<span v-text="item.nombre"></span></td>
                                    <td v-text="item.rfc"></td>
                                    <td><router-link :to="{name: 'control-de-cambios', params: { user: item.usuario }}"><i class="fas fa-angle-right fa-2x"></i></router-link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Navbar from '@/components/Static/Navbar';
    import Breadcrumb from '@/components/Static/Breadcrumb';
    import Return from '@/components/Static/Return';

    export default {
        name:'Inspeccionar',
        components: {
            Navbar,
            Breadcrumb,
            Return
        },
        data() {
            return {
                items: [],
                encontrados:'',
                buscar:''
            }
        },
        created(){
            var uri = this.$route.params;
            this.buscar = uri.user;
            let params = '';

            if(uri.user != undefined)
                params = '?q='+uri.user;
            
            this.$http.get('http://localhost:4003/colaboradores'+params)
            .then(response => {
                this.encontrados = "("+response.body.length+" encontrados)";
                for(var i = 0; i < response.body.length; i++) {
                    this.items.push({
                        nombre:response.body[i].nombre,
                        foto:response.body[i].foto,
                        rfc:response.body[i].rfc,
                        usuario:response.body[i].usuario
                    })
                }

            }).catch(error => {
                console.log(error)
            })
        }, methods:{
           getImgUrl(pet) {
                var images = require.context('../assets/img/', false, /\.jpg$/)
                return images('./' + pet )
            },
            limpiaritems(){
                this.buscar  = '';
                 this.items = [];
                this.$http.get('http://localhost:4003/colaboradores')
                .then(response => {
                    this.encontrados = "("+response.body.length+" encontrados)";
                    for(var i = 0; i < response.body.length; i++) {
                        this.items.push({
                            nombre:response.body[i].nombre,
                            foto:response.body[i].foto,
                            rfc:response.body[i].rfc,
                            usuario:response.body[i].usuario
                        })
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            buscando(e){
                this.items = [];
                var colaborador = e.target.value;
                this.$http.get('http://localhost:4003/colaboradores?q='+colaborador)
                .then(response => {
                    this.encontrados = "("+response.body.length+" encontrados)";
                    for(var i = 0; i < response.body.length; i++) {
                        this.items.push({
                            nombre:response.body[i].nombre,
                            foto:response.body[i].foto,
                            rfc:response.body[i].rfc,
                            usuario:response.body[i].usuario
                        })
                    }

                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>
<style>
    #control-de-cambios .input-group-text {
        color: #fff;
        background-color: #080A12;
    }
    
    .table tr th, .table tr td{
        text-align: left !important;
    }

    #control-de-cambios .form-control {
        background-color: #080A12;
        border-left: #080A12;
        border-right: #080A12;
    }
    
    .encontrados{
        color: #808595;
    }

    .table tr th:last-child div {
        color: #080A12;
    }
    
    .circle-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
</style>
