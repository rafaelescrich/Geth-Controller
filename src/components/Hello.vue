<script>
import CardPeers from './Hello/CardPeers.vue'
import CardSync from './Hello/CardSync.vue'
import CardPlusInfo from './Hello/CardPlusInfo.vue'

export default {
    components: {
        CardPeers,
        CardSync,
        CardPlusInfo
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
            <div class="col-12 text-center">
                <card-plus-info />
            </div>
            <div class="col text-center">
                fotase4
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
