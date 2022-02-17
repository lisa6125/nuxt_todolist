
export const state = () => ({
	tasks: [
    {
    "id":1,
    "done":false,
    "text":"倒垃圾"},
    {
    "id":2,
    "done":false,
    "text":"買菜"},
    {
    "id":3,
    "done":true,
    "text":"寫code"},
    {
    "id":4,
    "done":false,
    "text":"睡覺"},
    ]
})

export const mutations = {
  pushNewTasks(state,task) {
    state.tasks.unshift(task)
  },
  deleteTasks(state,id){
    state.tasks = state.tasks.filter((e)=>{
      return e.id !== id
    })
  }
}