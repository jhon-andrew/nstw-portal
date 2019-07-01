<template>
  <div>{{$route.params.id || 'main'}}</div>
</template>
<script>
export default {
  created () {
    console.log('Play video')
  }
}
</script>
