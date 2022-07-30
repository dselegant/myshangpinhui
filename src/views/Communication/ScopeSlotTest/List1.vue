<template>
  <ul>
    <li v-for="(item,index) in todos" :key="index">
    <!-- 作用域插槽 -->
    <!-- :todo="item"这段代码作用是,可让子组件将数据回传给父组件 
    item是对象
    :$index="index"每条数据的索引值也回传给父组件
    -->
    <slot :todo="item" :$index="index"></slot>
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