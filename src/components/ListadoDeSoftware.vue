<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <Breadcrumb bloque="listado-de-software"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h1><i class="fas fa-file-alt color-v title"></i> Listado de Software</h1>
                </div>
                <div class="col-md-6 text-right">
                    <button class="btn btn-default" v-b-modal.modal-add>
                        <i class="fas fa-plus color-v icon-btn"></i>&nbsp;&nbsp;AGREGAR NUEVO
                    </button>
                </div>
            </div>
            <div class="row form-group">
                <div class="col-md-12">
                    <hr/>
                </div>
            </div>
            
            <div class="row form-group">
                <div class="col-md-12">
                    <div class="cont-table">
                        <b-table :items="items" class="tab-table" thead-class="hidden_header">
                            <template #cell(html)="data">
                                <span v-html="data.value"></span>
                            </template>
                            <template #cell(id)="data">
                                <span v-html="data.value"></span>
                            </template>
                            <template #cell(name)="data">
                                <span v-html="data.value"></span>
                            </template>
                        </b-table>
                    </div>
                </div>
            </div>
        </div>

        <b-modal id="modal-add" title="Agregar Software">
            <form v-on:submit.prevent="setSoftware">
                <div class="form-group">
                    <input v-model="name" class="form-control" placeholder="Nombre" ref="name">
                </div>
                <div class="form-group">
                    <input v-model="credito" class="form-control" placeholder="Crédito" ref="credito">
                </div>
                <div class="form-group text-right">
                    <b-alert :variant="variant" :show="msnErrorSet">{{msn}}</b-alert>
                    <button class="btn btn-default" type="submit">
                        <i class="fas fa-save color-v icon-btn"></i> Guardar
                    </button>
                </div>
            </form>
        </b-modal>
    </div>
    
</template>
<script>
    import Navbar from '@/components/Static/Navbar';
    import Breadcrumb from '@/components/Static/Breadcrumb';

    export default {
        name:'ListadoDeSoftware',
        components: {
            Navbar,
            Breadcrumb
        },
        data() {
            return {
                items: [],
                name:'',
                credito:'',
                variant:'',
                msnErrorSet:'',
                msn:''
            }
        },
        created(){
            this.$http.get('http://localhost:4001/software')
            .then(response => {
                for(var i = 0; i < response.body.length; i++) {
                    this.items.push({
                        id:"<div class='id-cont'>"+(response.body[i].id.length== 2?response.body[i].id:"0"+response.body[i].id)+"</div>",
                        name:"<span class='name-sf'>"+response.body[i].name+"</span>",
                        credito:response.body[i].credito,
                        html: '<i class="fas fa-angle-right fa-2x"></i>'
                    })
                }

            }).catch(error => {
                console.log(error)
            })
        },
        methods: {
            setSoftware(){
                var name = this.name;
                var credito = this.credito;

                if(name == ''){
                    this.msnErrorSet = true;
                    this.variant = 'danger';
                    this.msn = 'Ingresa el nombre';
                    this.$refs.name.focus();
                    return
                } else {
                    this.msnErrorSet = false;
                    this.msn = '';
                    this.variant = '';
                }

                if(credito == ''){
                    this.msnErrorSet = true;
                    this.variant = 'danger';
                    this.msn = 'Ingresa el tipo de crédito';
                    this.$refs.credito.focus();
                    return
                } else {
                    this.msnErrorSet = false;
                    this.msn = '';
                    this.variant = '';
                }
                
                var myObj = {
                    "name":name,
                    "credito":credito
                };

                this.$http.post('http://localhost:4001/software',myObj)
                .then(response => {
                    if(response.body != undefined && response.body.id > 0){
                        this.msnErrorSet = true;
                        this.msn = 'El registro se creo con éxito';
                        this.variant = 'success';
                        this.listadoDeSoftware();
                        setTimeout(() => {
                            
                        }, 3000);
                    } else {
                        this.msnErrorSet = true;
                        this.variant = 'danger';
                        this.msn = 'El registro no se pudo crear'
                    }
                }).catch(error => {
                    console.log(error)
                })
            },
            listadoDeSoftware(){
                this.items =[];
                this.$http.get('http://localhost:4001/software')
                .then(response => {
                    for(var i = 0; i < response.body.length; i++) {
                        this.items.push({
                            id:"<div class='id-cont'>"+(response.body[i].id.length== 2?response.body[i].id:"0"+response.body[i].id)+"</div>",
                            name:"<span class='name-sf'>"+response.body[i].name+"</span>",
                            credito:response.body[i].credito,
                            html: '<i class="fas fa-angle-right fa-2x"></i>'
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
    #modal-add .modal-content {
        background-color: #181925;
        border: solid 1px #79FAB6;
    }
    
    .hidden_header {
        display: none;
    }

    .modal-footer{
        display: none;
    }

    .name-sf {
        font-weight: bold;
        font-size: 30px;
    }

</style>
