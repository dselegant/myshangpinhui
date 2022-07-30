<template>
  <div style="background: #ccc; height: 50px;">
    <span>小明每次花100元</span>
    <!-- 这个位置的update:money就可以随意取名了 -->
    <!-- $emit触发自定义事件,第一个参数是触发自定义事件的名字,
    第二个参数是子组件需要把父亲还剩多少钱告诉父亲 -->
    <button @click="$emit('update:money',money-100)">花钱</button>
    爸爸还剩 {{money}} 元
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Child2',
    props:['money']
  }
</script>
