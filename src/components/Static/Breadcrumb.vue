<template>
    <div class="mt-5 mb-5">
        <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>
<script>
    export default {
        name: 'Breadcrumb',
        props: {
            bloque: String
        },
        data() {
            return {
                items:[]
            }
        },
        created() {
            switch (this.bloque) {
            case 'home':
                this.items.push({
                    text: 'Home',
                    href: '#/home'
                })    
            break;
            case 'creditos-grupales':
                this.items.push(
                    {
                    text: 'Home',
                    href: '#/home'
                    },
                        {
                        text: 'Buscar créditos grupales',
                        href: '#/creditos-grupales'
                    }
                )    
            break;
            case 'inspeccionar':
                this.items =[];
                this.items.push(
                    {
                        text: 'Home',
                        href: '#/home'
                    },
                    {
                        text: 'Buscar créditos grupales',
                        href: '#/creditos-grupales'
                    },
                    {
                        text: 'Inspeccionar',
                        href: '#/inspeccionar'
                    }
                )    
            break;
            case 'control-de-cambios':
                this.items.push(
                    {
                        text: 'Home',
                        href: '#/home'
                    },
                        {
                        text: 'Buscar créditos grupales',
                        href: '#/creditos-grupales'
                    },
                        {
                        text: 'Inspeccionar',
                        href: '#/inspeccionar'
                    },
                    {
                        text: 'Control de cambios',
                        href: '#/control-de-cambios'
                    }
                )    
            break;
            case 'listado-de-software':
                this.items.push(
                    {
                        text: 'Listado de Software',
                        href: '#/listado-de-software'
                    }
                )
            break;
            
            default:
                this.items.push({
                    text: 'Home',
                    href: '#/home'
                })
            break;
            }
        }
    }
</script>
<style>
    .breadcrumb{
        background: #080A12 !important;
    }
    
    .breadcrumb-item  a{
        color: #fff;
        text-decoration: underline;
    }

</style>