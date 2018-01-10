<template>
  <div class="container items-center">
      <div class="row center-wrapper justify-center column">
          <div id="btn-wrapper" class="self-center justify-center">
            <q-btn push glossy color="light-blue" class="btn-bigger" round>
                <h2>
                    Start Mining
                </h2>
            </q-btn>
          </div>
      </div>
  </div>
</template>

<script>
import { QBtn } from 'quasar'

export default {
  components: {
      QBtn
  }
}
</script>

<style scoped>
.container, .center-wrapper{
    height: 87.2vh;
}
.btn-bigger{
    width: 60vh;
    height: 60vh;
    transition: all .2s ease-in-out;
}
.btn-bigger:hover{
    transform: scale(1.05, 1.05);
}
</style>
