<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <Breadcrumb bloque="creditos-grupales"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <h1><i class="fas fa-search color-v title"></i> Buscar créditos grupales</h1>
                </div>
                <div class="col-md-6 text-right">
                    <router-link :to="{name: 'inspeccionar'}">
                        <button class="btn btn-default" v-b-modal.modal-add>
                            <i class="fas fa-search-plus color-v icon-btn"></i> &nbsp;&nbsp; INSPECCIONAR
                        </button>
                    </router-link>
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
                        <table class="table b-table tab-table" widht="100%">
                            <thead>
                                <tr>
                                    <th>Archivo</th>
                                    <th>Expedición</th>
                                    <th>% Calidad De Información</th>
                                    <th>Estatus</th>
                                    <th>Finalización</th>
                                    <th>Usuario</th>
                                    <th>Acciones</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" v-bind:key="item.id">
                                    <td><a :href="item.archivo" download><span v-html="item.archivo"></span></a></td>
                                    <td v-text="item.expedicion"></td>
                                    <td v-text="item.calidad"></td>
                                    <td>
                                        <div v-if="item.estatus === 'Finalizado'">
                                            <span v-html="item.estatus" class="text-success"></span>
                                        </div>
                                        <div v-else-if="item.estatus === 'En proceso'">
                                            <span v-html="item.estatus" class="text-warning"></span>
                                        </div>
                                        <div v-else-if="item.estatus === 'Rechazado'">
                                            <span v-html="item.estatus" class="text-danger"></span>
                                        </div>
                                        <div v-else>
                                            <span v-html="item.estatus" ></span>
                                        </div>
                                    </td>
                                    <td v-text="item.finalizacion"></td>
                                    <td v-text="item.usuario"></td>
                                    <td><a :href="item.archivo" download><i class="fas fa-file-download fa-2x"></i></a></td>
                                    <td><router-link :to="{name: 'inspeccionar', params: { user: item.usuario }}"><i class="fas fa-angle-right fa-2x"></i></router-link></td>
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

    export default {
        name:'CreditosGrupales',
        components: {
            Navbar,
            Breadcrumb
        },
        data() {
            return {
                items: []
            }
        },
        created(){
            
            this.$http.get('http://localhost:4002/creditos')
            .then(response => {
                for(var i = 0; i < response.body.length; i++) {
                    this.items.push({
                        archivo:response.body[i].archivo,
                        expedicion:response.body[i].expedicion,
                        calidad:response.body[i].calidad,
                        estatus:response.body[i].estatus,
                        finalizacion:response.body[i].finalizacion,
                        usuario:response.body[i].usuario,
                        acciones: '<i class="fas fa-file-download fa-2x"></i>',
                        html: '<a href="#/inspeccionar?user='+response.body[i].usuario+'"><i class="fas fa-angle-right fa-2x"></i></router-link>'
                    })
                }

            }).catch(error => {
                console.log(error)
            })
        }
    }
</script>

<style>
    .table tr th:last-child div {
        color: #080A12;
    }

    .table tr td, .table tr th{
        text-align: center;
    }

</style>
