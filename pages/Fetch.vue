<script>
import axios from "axios";
export default {
  data(){
    return{
      data: [],
    }
  },
  // 這個階段的生命週期 Vue實體已經產生 可以使用this(Ｖue本身)
  async fetch(){
      // 發生錯誤 https://vue-lessons-api.herokuapp.com/photo/list?status=error
      const res = await axios.get("https://vue-lessons-api.herokuapp.com/photo/list");
      console.log(res.data);
      this.data = res.data;

    // 不能直接return資料出去
    // return{ xxx }
  },
  // 當使用keep-alive 才可以調用的生命週期函示
  // 目的是為了 進行緩存,以免API重複次數過於頻繁
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 10000) {
      this.$fetch()
    }
  },
};
</script>
<template>
  <div>
    <h2>This is an fetch</h2>

    <!-- loading -->
    <h4 v-if="$fetchState.pending">Loading....</h4>
    <!-- 錯誤 -->
    <h4 v-else="$fetchState.error">{{ $fetchState.error?.response?.data?.error_msg}}</h4>
    <img v-for="item in data" :src="item.url" :key="item.url" alt="">

  </div>
</template>
<style lang='scss' scoped>
h4 {
  font-size: 40px;
  color: red;
}
</style>


