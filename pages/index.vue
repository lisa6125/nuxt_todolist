<template>
<div class="home">
  <Navbar/>
  <div class="container">
    <div class="main">
      <h1>{{ title }}</h1>
      <p @click="changeLanguage()"><font-awesome-icon icon="fa-solid fa-language" /></p>
      <div class="list">
        <draggable :list="tasks" ghostClass="on-drag" animation="400">
          <ListItem v-for="task in tasks" 
          :task="task" :key="task.id" @doneStatus="doneStatus" @deleteTask="deleteTask"/>
        </draggable>
      </div>
      <AddItem @addNewTasks="addNewTasks" :placeHolder="placeHolder"/>
    </div>
  </div>
  <LoaderImg :loadingStatus="loadingStatus"/>
</div>

</template>

<script>
import {mapMutations} from "vuex";
import {v4} from 'uuid';
import draggable from "vuedraggable";
export default {
  name: 'Home',
  data(){
    return{
      newTask:'',
      loadingStatus:false,
      tasks:[]
    }
  },
  components:{draggable},
  computed:{
    // ...mapState(["tasks"]),
      title() {
        return this.$t("title");
      },
      placeHolder(){
        return this.$t("placeHolder");
      }
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
      this.tasks.unshift(newItem)
      let asyncAdd = () => {
        let vm = this;
        return new Promise(function (resolve, reject) {
          setTimeout(() => {
            vm.pushNewTasks(vm.tasks);
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
            vm.pushNewTasks(vm.tasks);
            vm.deleteTasks(id);
            resolve('success')
          }, 1000);
        })
      };
      asyncDel().then(()=>{
        this.getVuexState()
        this.loadingStatus = false;
      })
    },
    changeLanguage() {
      let noeLang = this.$i18n.locale;
      if(noeLang === 'zh'){
        this.$i18n.locale = 'en'
      }else{
        this.$i18n.locale = 'zh'
      }
    },
    getVuexState(){
      this.tasks = this.$store.state.tasks.slice();
    }
  },
  mounted(){
    this.getVuexState()
  }
}
</script>
<style lang="scss">
@import '../assets/main.scss';
$primary-color:#8DC8FF;
$second-color:#C7C3C6;
$font-lg:36px;

.navbar{
  width: 100%;
  height: 55px;
  position:fixed;
  z-index:99;
  top:0;
  left:0;
  background-color: $primary-color;
  color:#fff;
  font-size: $font-lg;
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
      font-size:$font-lg;
      font-weight:700;
      +p{
        cursor:pointer;
        width:30px;
        font-size:24px;
        color:$second-color;
      }
    }
    .list{
      padding:30px;
      margin-top:30px;
      &-item{
        display:flex;
        align-items:center;
        margin-bottom:10px;
        padding:20px;
        &-checkbox{
          width:20px;
          height:20px;
          border:1px solid $second-color;
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
            border:1px solid $primary-color;
            display:flex;
            justify-content:center;
            align-items:center;
            .icon{
              color:$primary-color;
            }
          }
          .list-item-text{
            color:$primary-color;
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
          border: 1px solid $second-color;
          border-radius: 4px;
          padding:5px;
          &:focus{
            outline: 1px solid $second-color;
          }
        }
      }
      .icon{
        font-size: $font-lg;
        color:$primary-color;
        margin-left:25px;
        cursor:pointer;
      }
    }
  }
}
.on-drag{
  background-color:#ddf3f2;
  color:#fff;
}
</style>
