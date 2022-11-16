<script>
import axios from "axios";
export default {
  async asyncData(context){
    console.log(context.params.id);
    let pageDetail = { data : []};
    let isError = false;
    let message = "";
    try {
      const res = await axios.get(`https://vue-lessons-api.herokuapp.com/courses/${context.params.id}`)
      pageDetail.data = res.data.data[0];
    } catch (error) {
      isError = true;
      message= error.response.data;
    }
    return {
      pageDetail, isError , message
    }
  },
  data(){
    return {
      cleanTimer: null,
    }
  },
  computed:{
    // 重組資料
    dataDetail(){
      return this.pageDetail.data;
    }
  },
  methods:{
    // 用按鈕叫出 loadingBar
    openLoading() {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.finish();
      }, 2000);
    }
  },
  mounted() {
    if(this.isError){
      // 轉導回頁面
      this.cleanTimer = setTimeout(() => {
      this.$router.push({ path: "/courses" });
      // or this.$router.go(-1)
      }, 3000);
    }
  },
  // 離開頁面銷毀
  destroyed() {
    clearTimeout(this.cleanTimer);
  }
};
</script>
<template>

  <div v-if="!isError" class="outer">
    <div>
      <h1>{{ dataDetail.name }}</h1>
      <h2>NTD: {{ dataDetail.money }}</h2>
      <img :src="dataDetail.photo" alt="" />

      <!-- 第一種 轉陣列去判斷有無存在 -->
      <!-- <div v-if="Object.keys(dataDetail).length !== 0">
        <img :src="dataDetail.teacher.img" alt="" />
        <p>{{ dataDetail.teacher.name }}</p>
      </div> -->
      <!-- 第二種 可選串連算符？ -->
      <div>
        <img :src="dataDetail.teacher?.img" alt="" />
        <p>{{ dataDetail.teacher?.name }}</p>
      </div>
      <button @click="openLoading">loading</button>
    </div>
  </div>
  <!-- 錯誤處理 -->
  <h1 v-else-if="isError">{{ message.error_message }}</h1>

</template>
<style lang='scss' scoped>
.outer,
h1 {
  text-align: center;
}
img {
  display: inline-block;
}
</style>
