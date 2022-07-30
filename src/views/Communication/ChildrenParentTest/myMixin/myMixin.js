export default{
  //对外暴露的对象,可以放置组件重复的JS业务逻辑
  methods: {
    giveMoney(money){
      //儿子给爸爸钱的回调函数
      this.money-=money;
      //需要在子组件内部,获取到父组件,让父组件的数据加上50
      //可以通过$parent获取到某一个组件父组件,可以操作父组件(属性|方法)
      this.$parent.money+=money;
    }
  }
}