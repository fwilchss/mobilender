<template>
    <router-link :to="{name: url}">
        <div class="return">
            <i class="fas fa-arrow-left color-v"></i>
        </div>
    </router-link>
</template>
<script>
export default {
    name: 'Return',
    props: {
        url: String
    },
    data() {
        return {

        }
    }
}
</script>
<style>
    .return {
        position: absolute;
        left: -40px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        padding: 5px 11px;
        font-size: 20px;
    }
</style>