<template>
  <ul>
    <li v-for="(item,index) in todos" :key="index">
    <!-- 作用域插槽 -->
    <!-- :todo="item"这段代码作用是,可让子组件将数据回传给父组件 
    item是对象
    -->
    <slot :todo="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name:'List',
  props: {
    todos: Array
  }
}
</script>