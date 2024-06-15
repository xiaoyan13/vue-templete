<script setup lang="ts">
import {setGlobalLocale} from '@/i18n'
function changeLang() {
  setGlobalLocale('en')
}

</script>


<template>
    <div id="main-view" class="text-sky-400">
      {{ $t('hello-world') }} <button @click="changeLang">{{ $t('gaiBianYuYan') }}</button>
      hello
    </div>
</template>

<style scoped>
#main-view {
  padding: 2rem;
}
</style>
