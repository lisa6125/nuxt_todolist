<!-- Please remove this file from your project -->
<template>
  <div class="addItem">
    <div class="addItem-input">
      <input type="text" :placeholder="placeHolder" v-model="newTask" @keyup.enter="addNewTasks"/>
    </div>
    <span class="icon" @click="addNewTasks">
        <font-awesome-icon :icon="['fa', 'fa-plus-square']"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AddItem',
  props:["placeHolder"],
  data(){
    return {
      newTask:''
    }
  },
  methods:{
    addNewTasks(){
      this.$emit('addNewTasks',this.newTask)
      this.newTask = ''
    },
  }
}
</script>
<style lang="scss">
</style>