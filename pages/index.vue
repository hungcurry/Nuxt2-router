<script>
import Tutorial from "../components/Tutorial.vue";
export default {
  components: {
    Tutorial,
  },
  asyncData(){
    const name = "curry";
    return{
      name,
    }
  },
  data(){
    return{
      name: "",
    }
  },
  methods:{
    handClick(){
      this.name = "白爛貓"
    }
  }
};
</script>
<template>
  <div>
    <p>{{ name }}</p>
    <button @click="handClick">點我</button>
    <Tutorial/>
  </div>
</template>
<style lang='scss' scoped>
</style>


