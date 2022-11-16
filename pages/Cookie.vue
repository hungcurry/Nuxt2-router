<script>
export default {
  async asyncData(){
    return{
    }
  },
  data(){
    return {
      cookData :"",
    }
  },
  mounted(){
    // .. 封裝後: cookie ..
    // ===================
    this.$cookies.set("user", { email: "mike@gmail.com" }); // 設定
    this.cookData = this.$cookies.get("user") || [];  // 取值
    console.log(this.cookData);
  }
};
</script>
<template>
  <div>
    <h1>cookData</h1>
    <p>{{ cookData.email }}</p>
  </div>
</template>
<style lang="scss" scoped>
</style>
