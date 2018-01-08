<script>
import CardPeers from './Hello/CardPeers.vue'
import CardSync from './Hello/CardSync.vue'

export default {
    components: {
        CardPeers,
        CardSync
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <card-peers />
            </div>
            <div class="col text-center">
                <card-sync />
            </div>
        </div>
        <div class="row">
            <div class="col text-center">
                fotase3
            </div>
            <div class="col text-center">
                fotase4
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
