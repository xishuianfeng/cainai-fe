<template>
  <div>
    <img class="icon" :src=iconURL />
  </div>
</template>

<script lang="ts">
  export default {
    name:'icon',
    props:{
      icon:{
        type:String
      }
    },
    
    data(){
      return{
        iconURL:''
      }
    },

    mounted() {
      const svgs = import.meta.glob('../assets/icons/*.svg')
      const getURL = svgs[`../assets/icons/${this.icon}.svg`]
      getURL().then((url) => {
        //@ts-ignore
        this.iconURL = url.default
      })
    },
  }
</script>

<style lang="scss">
  .icon{
    width: 1.2em;
    height: 1.2em;
  }
</style>