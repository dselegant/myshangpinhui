<template>
  <div>
    <h2>深入v-model</h2>
    <input type="text" v-model="msg" />
    <span>{{ msg }}</span>
    <br />
    <hr />
    <h2>v-model实现原理(vue2)</h2>
    <!-- 
      原生DOM当中是有oninput事件,它经常结合表单元素一起使用,当表单元素文本内容发生变化的时候就会发出一次回调
      Vue2:可以通过value与input事件实现v-model功能
      原生DOM标签身上的 :value是v-bind单项数据绑定
    -->
    <input type="text" :value="msg" @input="msg = $event.target.value" />
    <span>{{ msg }}</span>
    <!-- 深入学习v-model:实现父子组件数据同步(实现父子组件通信) -->
    <hr />
    <!-- 
      组件身上的:value是props,父子组件通信
      这里的@input是 非原生DOM的input事件 ,属于自定义事件
    -->
    <CustomInput :value="msg" @input="msg = $event" />
    <!--上面那种写法可以简化为下面这种写法,可以实现父子组件数据同步,
    v-model不仅可以在表单元素身上使用,还可以在非表单元素身上使用,
    后台管理系统中经常在非表单元素身上,或者已经封装好的身上v-model-->
    <CustomInput v-model="msg" />
    <span>{{ msg }}</span>
  </div>
</template>

<script type="text/ecmascript-6">
import CustomInput from './CustomInput.vue'
export default {
  name: 'ModelTest',
  components: {
    CustomInput
  },
  data() {
    return {
      msg: '我爱你中国'
    }
  },

}
</script>
