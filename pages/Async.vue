<script>
import axios from "axios";
export default {
  async asyncData(){
    let data = [];
    const res = await axios.get("https://vue-lessons-api.herokuapp.com/photo/list");
    console.log(res.data);
    data = res.data;
    return{
      data
    }
  },
  data(){
    return{ }
  },
};
</script>
<template>
  <div>
    <h2>This is an async</h2>
    <img v-for="item in data" :src="item.url" :key="item.url" alt="">
  </div>
</template>
<style lang='scss' scoped>
</style>

