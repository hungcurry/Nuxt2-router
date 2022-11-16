<script>
export default {
  async asyncData(){
    return{
    }
  },
  data(){
    return {
      localData : "",
    }
  },
  mounted(){
    // .. 原本:Localstorage ..
    // ===================
    // localStorage.setItem("userData", JSON.stringify({ name: "curry", age: 12 })); // 設定
    // const data = JSON.parse(localStorage.getItem("kkkkk")) || []; // 取值
    // console.log(data)

    // .. 封裝後:Localstorage ..
    // ===================
    this.$localStorage.set("userData", { name: "curry", age: 12 }); // 設定
    this.localData = this.$localStorage.get("userData") || [];  // 取值
    console.log(this.localData);
  }
};
</script>
<template>
  <div>
    <h1>localStorage</h1>
    <p>{{ localData.name }}</p>
    <p>{{ localData.age }}</p>
  </div>
</template>
<style lang="scss" scoped>
</style>
