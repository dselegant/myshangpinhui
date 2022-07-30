<template>
  <div>
    <h2>效果一:显示TODO列表时,已完成的TODO为绿色</h2>
    <!-- 子组件:数据来源于父组件 
    <List :todos="todos"> 这是父组件给子组件传数据
    -->
    <List :todos="todos">
      <!-- 子组件决定不了它的结构与外观,子组件的结构与外观需要父组件传 -->
      <!--  slot-scope="todo",todo是变量,用来接收作用域插槽回传的数据 -->
      <template slot-scope="todo"> 
        <span :style="{color:todo.todo.isComplete?'green':'red'}">{{todo.todo.text}}</span>
      </template>
    </List>    
    <hr>
    <h2>效果二:显示TODO列表时,带序号,TODO的颜色为蓝绿搭配</h2>
    <List1 :todos="todos">
    <!-- 因为我们知道回传的是一个对象,我们可以把对象进行解构,解构的时候需要注意,K,V必须一致,K,V不一致解构不出数组 -->
      <template slot-scope="{todo,$index}"> 
        <span :style="{color:todo.isComplete?'blue':'green'}">{{$index}}----{{todo.text}}</span>
      </template>
    </List1>
  </div>
</template>

<script type="text/ecmascript-6">
  import List from './List'
  import List1 from './List1'
  export default {
    name: 'ScopeSlotTest',
    data () {
      return {
        todos: [
          {id: 1, text: 'AAA', isComplete: false},
          {id: 2, text: 'BBB', isComplete: true},
          {id: 3, text: 'CCC', isComplete: false},
          {id: 4, text: 'DDD', isComplete: false},
        ]
      }
    },
    components: {
      List,
      List1
    }
  }
</script>
