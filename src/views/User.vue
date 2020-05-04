<template>
  <div>
    <!-- <h1>This is User {{ $route.params.username}}</h1> -->
    <h1>This is User {{ username}}</h1>
  </div>
</template>
<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>
