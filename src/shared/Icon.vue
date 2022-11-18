<template>
  <div>
    <img class="icon" :src=iconURL />
  </div>
</template>

<script lang="ts">
  export default{
    name:'icon',
    data(props){
      const icon = props.icon
    
      return{
        iconURL:`src/assets/icons/${this.icon}`
      }
    }
  }
</script>

<style lang="scss">
  .icon{
    width: 12em;
    height: 12em;
  }
</style>