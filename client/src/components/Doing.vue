<template>
   <div>
    <div class="card">
      <div class="card-header">
        Doing
      </div>
      <div class="card-block" v-for="task in tasks">
        <h4 class="card-title">{{ task.title}}</h4>
        <p class="card-text">{{ task.desc }}</p>
          <button type="button" class="btn" data-toggle="modal" @click="showDetail(task)" data-target="#myModalDoing">
            More
          </button>
      </div>
    </div>
    <!-- modal -->
    <!-- Button trigger modal -->
      <div class="modal fade" id="myModalDoing" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              	<div class="loginmodal-container">
                <h1>Doing</h1><br>
                <form>
                  <label>Title</label>
                  <input type="text" name="title" :value="detailTask.title">
                  <label>Desc</label>
                  <input type="text" name="desc"  :value="detailTask.desc">
                  <label>Point</label>
                  <input type="text" name="point" :value="detailTask.point">
                  <label>Assigned To</label>
                  <input type="text" name="assignedTo" :value="detailTask.assignedTo">
                  <input type="submit" name="add" class="login loginmodal-submit" value="To Done" @click="addDone">
                </form> 
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click="todo()">To Do</button>
              <button type="button" class="btn btn-danger" @click="remove()">Remove</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import db from '../firebase'
export default {
  name: 'Doing',
  props: ['tasks'],
  data () {
    return {
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
    remove () {
      console.log(this.detailTask.key)
      db.ref(`/doing/${this.detailTask.key}`).remove()
    },
    addDone () {
      console.log('masuk done')
      const newTask = {
        title: this.detailTask.title,
        desc: this.detailTask.desc,
        point: this.detailTask.point,
        assignedTo: this.detailTask.assignedTo
      }
      db.ref('/done').push(newTask)
      this.remove()
    },
    todo: function () {
      db.ref('/todo').push(this.detailTask)
      this.remove()
    }
  }
}
</script>

<style>
.card-block {
  border-bottom: 1px solid #999;
}
.card-header {
  background-color: #2ccc84
}
</style>
