<template>
  <div>
    <!-- 可以巧妙利用a标签实现按钮带有提示功能 -->
    <a :title="title">
      <!-- 
        这是复杂的写法,也可以实现效果,但是当属性过多的时候就很麻烦了
        <el-button :type="$attrs.type" :icon="$attrs.icon" :size="$attrs.size"></el-button>
      -->
      <!-- 下面这种写法v-bind不能用 : 不然没效果,这是简单的写法实现效果 -->
      <!-- v-on也不能用 @ 不然没效果-->
      <el-button v-bind="$attrs" v-on="$listeners"></el-button>
    </a>
  </div>
</template>

<script>
  export default {
    props:['title'],
    mounted () {
      //$attrs属于组件实例自身的一个属性,可以获取到父组件传递过来的props数据
      //对于子组件而言,父组件给的数据可以利用props接收,
      //注意,如果子组件通过props接收的属性,在$attrs属性当中是获取不到的
      console.log(this.$attrs);
      //$listeners,它也是组件实例自身的一个属性,它可以获取到父组件给子组件传递的自定义事件
      console.log(this.$listeners);
    },
  }
</script>
<style lang="scss" scoped>
</style>