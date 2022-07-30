<template>
  <div>
    <h2>BABA有存款: {{ money }}</h2>
    <button @click="borrowFromXM(100)">找小明借钱100</button><br />
    <button @click="borrowFromXH(150)">找小红借钱150</button><br />
    <button @click="borrowFromAll(200)">找所有孩子借钱200</button><br />
    <br />
    <Son ref="xm" />
    <br />
    <Daughter ref="xh"/>
  </div>
</template>
<script>
import Son from "./Son";
import Daughter from "./Daughter";
export default {
  name: "ChildrenParentTest",
  data() {
    return {
      money: 1000,
    };
  },
  methods: {
    //向儿子小明借钱
    borrowFromXM(money){
      this.money += 100
      console.log(this.$refs.xm)
      //ref可以获取真实DOM节点,当然也可以获取子组件标签(操作子组件的数据与方法)
      this.$refs.xm.money -= money
    },
    //向女儿小红借钱
    borrowFromXH(money){
      this.money +=150
      console.log(this.$refs.xh)
      this.$refs.xh.money -= money
    },
    //向全部的孩子借用200
    borrowFromAll(money){
      this.money += 2*money
      //组件实例自身拥有一个属性$children,可以获取到当前组件当中,全部子组件
      console.log(this.$children)
      this.$children.forEach(item=>{
        item.money-=200
      })
      //切记别这样书写:如果组件过多,第零项可能不是小明
      //this.$children[0].money-=200
      //this.$children[1].money-=200
    }
  },
  components: {
    Son,
    Daughter,
  },
};
</script>
<style>
</style>
