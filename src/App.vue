<script setup lang="ts"></script>

<template>
  <RouterView />
  <!-- ✓ GOOD -->
  <img src="./logo.png" />

  <!-- ✗ BAD -->
  <img src="./logo.png" />
  <img src="./logo.png" />
</template>

<style>
a {
  b {
    color: '#fff';
  }
}
</style>
