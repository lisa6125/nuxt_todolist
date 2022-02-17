<template>
<div class="home">
  <Navbar/>
  <div class="container">
    <div class="main">
      <h1>Todo List</h1>
      <div class="list">
        <ListItem v-for="task in tasks" 
        :task="task" :key="task.id" @doneStatus="doneStatus" @deleteTask="deleteTask"/>
      </div>
      <AddItem @addNewTasks="addNewTasks"/>
    </div>
  </div>
  <LoaderImg :loadingStatus="loadingStatus"/>
</div>

</template>

<script>
import {mapState,mapMutations} from "vuex";
import {v4} from 'uuid';
export default {
  name: 'Home',
  data(){
    return{
      newTask:'',
      loadingStatus:false,
    }
  },
  computed:{
    ...mapState(["tasks"])
  },
  methods:{
    ...mapMutations(["pushNewTasks","deleteTasks","doneStatus"]),
    addNewTasks(newTask){
      if(newTask === ""){
        return
      }
      this.loadingStatus = true;
      let newItem ={
        "id":v4(),
        "done":false,
        "text":newTask
      }
      let asyncAdd = () => {
        let vm = this;
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            vm.pushNewTasks(newItem);
            resolve('success')
          }, 1000);
        })
      };
      asyncAdd().then(()=>{
        this.loadingStatus = false;
      })
    },
    deleteTask(id){
      this.loadingStatus = true;

      let asyncDel = () => {
        let vm = this;
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            vm.deleteTasks(id);
            resolve('success')
          }, 1000);
        })
      };
      asyncDel().then(()=>{
        this.loadingStatus = false;
      })
    }
  }
}
</script>
<style lang="scss">
@import '../assets/main.scss';
.navbar{
  width: 100%;
  height: 55px;
  position:fixed;
  z-index:99;
  top:0;
  left:0;
  background-color: #8DC8FF;
  color:#fff;
  font-size: 36px;
  display:flex;
  align-items:center;
  .icon{
    flex-basis: 50px;
    height: 36px;
    margin: auto 25px;
  }
  .logoName{
    flex-grow:1;
  }
}
.container{
  width:100%;
  min-height:100vh;
  background-color:#E5E5E5;
  display: flex;
  .main{
    margin:70px 90px 24px 90px;
    width:100%;
    min-height:100%;
    padding:30px;
    flex-shrink: 1;
    background-color:#fff;
    position:relative;
    h1{
      font-size:36px;
      font-weight:700;
    }
    .list{
      padding:30px;
      margin-top:30px;
      &-item{
        display:flex;
        align-items:center;
        margin-bottom:30px;
        &-checkbox{
          width:20px;
          height:20px;
          border:1px solid  #C7C3C6;
          margin-right:32px;
          cursor:pointer;
        }
        &-text{
          font-size:18px;
          font-weight:600;
          flex-grow:1;
        }
        &-trash{
          color:#F56767;
          font-size:24px;
          cursor:pointer;
        }
        &.active{
          .list-item-checkbox{
            border:1px solid #8DC8FF;
            display:flex;
            justify-content:center;
            align-items:center;
            .icon{
              color:#8DC8FF;
            }
          }
          .list-item-text{
            color:#8DC8FF;
          }
        }
      }
    }
    .addItem{
      position:absolute;
      width:100%;
      box-sizing:border-box;
      padding: 10px 15px;
      bottom:10px;
      left:0px;
      display:flex;
      align-items:center;
      &-input{
        flex-grow:1;
        input{
          width:100%;
          height:34px;
          box-sizing:border-box;
          border: 1px solid #C7C3C6;
          border-radius: 4px;
          padding:5px;
          &:focus{
            outline: 1px solid #C7C3C6;
          }
        }
      }
      .icon{
        font-size: 36px;
        color:#8DC8FF;
        margin-left:25px;
        cursor:pointer;
      }
    }
  }
}
</style>
