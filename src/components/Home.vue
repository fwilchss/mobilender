<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <Breadcrumb bloque="home"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Navbar from '@/components/Static/Navbar';
    import Breadcrumb from '@/components/Static/Breadcrumb';

    export default {
        name:'Home',
        components: {
            Navbar,
            Breadcrumb
        },
        data() {
            return {}
        }
    }
</script>
<style>
</style>