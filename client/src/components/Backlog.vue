<template>
  <div>
    <div class="card">
      <div class="card-header">
        Backlog
      </div>
      <div class="card-block" v-for="task in tasks">
        <h4 class="card-title">{{ task.title}}</h4>
        <p class="card-text">{{ task.desc }}</p>
          <button type="button" class="btn" data-toggle="modal" @click="showDetail(task)" data-target="#myModal">
            More
          </button>
      </div>
    </div>
    <!-- modal -->
    <!-- Button trigger modal -->
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">BackLog</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              	<div class="loginmodal-container">
                <h1>Back Log</h1><br>
                <form>
                  <label>Title</label>
                  <input type="text" name="title" :value="detailTask.title">
                  <label>Desc</label>
                  <input type="text" name="desc"  :value="detailTask.desc">
                  <label>Point</label>
                  <input type="text" name="point" :value="detailTask.point">
                  <label>Assigned To</label>
                  <input type="text" name="assignedTo" :value="detailTask.assignedTo">
                  <input type="submit" name="add" class="login loginmodal-submit" value="Add ToDo" @click="addTodo">
                </form> 
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger" @click="remove()">Remove</button>
            cd ..
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import db from '../firebase'
export default {
  name: 'Backlog',
  props: ['tasks'],
  data () {
    return {
      modalShow: false,
      detailTask: {
        title: '',
        desc: '',
        point: '',
        assignedTo: '',
        key: ''
      }
    }
  },
  methods: {
    showDetail (task) {
      console.log('masuk show', task)
      this.detailTask.title = task.title
      this.detailTask.desc = task.desc
      this.detailTask.point = task.point
      this.detailTask.assignedTo = task.assignedTo
      this.detailTask.key = task['.key']
    },
    showModal (payload) {
      this.task = payload
    },
    remove () {
      console.log(this.detailTask.key)
      db.ref(`/backlog/${this.detailTask.key}`).remove()
    },
    addTodo () {
      console.log('masuk todo')
      const newTask = {
        title: this.detailTask.title,
        desc: this.detailTask.desc,
        point: this.detailTask.point,
        assignedTo: this.detailTask.assignedTo
      }
      db.ref('/todo').push(newTask)
      this.remove()
    }
  }
}
</script>

<style scoped>
.card-block {
  border-bottom: 1px solid #999;
}
.card-header {
  background-color: #2ccc84
}
</style>
