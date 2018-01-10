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
            <div class="col-xs-12 col-md-4 text-center">
                <card-peers />
            </div>
            <div class="col-xs-12 col-md-4 text-center">
                <card-plus-info />
            </div>
            <div class="col-xs-12 col-md-4 text-center">
                <card-sync />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
