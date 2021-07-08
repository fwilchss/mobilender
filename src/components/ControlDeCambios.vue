<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <Breadcrumb bloque="control-de-cambios"/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <Return url="inspeccionar"/>
                    <h1><i class="fas fa-search color-v title"></i> Control de cambios</h1>
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
                                    <th></th>
                                    <th>Fecha</th>
                                    <th>Archivo</th>
                                    <th>Cambios</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in items" v-bind:key="item.id">
                                    <td><div class='id-cont' v-text="item.id"></div></td>
                                    <td v-text="item.fecha"></td>
                                    <td><a :href="item.archivo" download><span v-html="item.archivo"></span></a></td>
                                    <td v-text="item.cambios"></td>
                                </tr>
                            </tbody>
                        </table>
                     </div>
                    <b-alert :show="msn">No hay control de cambios para este usuario {{usuario}}</b-alert>
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
        name:'ControlDeCambios',
        components: {
            Navbar,
            Breadcrumb,
            Return
        },
        data() {
            return {
                items: [],
                usuario : '',
                msn : false
            }
        },
        created(){
            var uri = this.$route.params;
            var params = '';

            if(uri.user != undefined)
                params = '?q='+uri.user;

            this.$http.get('http://localhost:4004/control'+params)
            .then(response => {
                if(response.body.length > 0 ){
                    for(var i = 0; i < response.body.length; i++) {
                        this.items.push({
                            id:response.body[i].id,
                            fecha:response.body[i].fecha,
                            archivo:response.body[i].archivo,
                            cambios:response.body[i].cambios
                        })
                    }
                }else {
                    this.msn = true;
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
</script>
<style>
    .table tr th:first-child div {
        color: #080A12;
    }
</style>
