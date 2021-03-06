
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
    ],
  locale: "en",
  locales: ["en", "zh"]
})

export const mutations = {
  pushNewTasks(state,tasks) {
    state.tasks = tasks.slice()
  },
  deleteTasks(state,id){
    state.tasks = state.tasks.filter((e)=>{
      return e.id !== id
    })
  },
  doneStatus(state,id){
    let item = state.tasks.find((e)=>{
      return e.id === id
    })
    item.done = !item.done
  },
}