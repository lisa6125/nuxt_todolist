<!-- Please remove this file from your project -->
<template>
  <div class="list-item" :key="task.id" :class="{'active':task.done}">
    <div class="list-item-checkbox" @click="doneStatus(task.id)">
      <span class="icon" v-if="task.done">
          <font-awesome-icon :icon="['fa', 'fa-check']"/>
      </span>
    </div>
    <div class="list-item-text">{{task.text}}</div>
    <div class="list-item-trash" @click="deleteTask(task.id)">
      <font-awesome-icon :icon="['fa', 'fa-trash']"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props:['task'],
  methods:{
    doneStatus(id){
      this.$emit('doneStatus',id)
    },
    deleteTask(id){
      this.$emit('deleteTask',id)
    },
  }
}
</script>
<style lang="scss">
</style>