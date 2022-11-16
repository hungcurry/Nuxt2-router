<script>
export default {
  async asyncData(){
    return{
    }
  },
  data(){
    return {
    }
  },
  methods:{
    successClick(){
      // using options
      this.$notify({
        group: 'success',
        type: 'success',
        title: 'Important message',
        text: 'Hello user!'
      });
    },
    errorClick(){
      // using options
      this.$notify({
        group: 'error',
        type: 'error',
        title: 'Important message',
        text: 'Hello user!'
      });
    }
  }
};
</script>
<template>
  <div>
    <button @click="successClick">彈出訊息success</button>
    <notifications group="success" position="bottom right"/>
    <br>
    <button @click="errorClick">彈出訊息error</button>
    <notifications group="error"  position="bottom left"/>
  </div>
</template>
<style lang="scss" scoped>
button{
  display: block;
  padding: 20px 10px;
  font-size: 36px;
}
</style>
