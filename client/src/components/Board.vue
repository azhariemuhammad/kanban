<template>
  <div class="hello">
    <p style="3rem;">< Hello there /></p>
    <Tasks/>
    <hr>
    <div class="row">
      <div class="col-md-3">
        <Backlog :tasks="backlog"/>
      </div>
      <div class="col-md-3">
        <Todo :tasks="todo"/>
      </div>
      <div class="col-md-3">
        <Doing :tasks="doing"/>
      </div>
      <div class="col-md-3">
        <Done :tasks="done"/>
      </div>
    </div>
  </div>
</template>

<script>
import Tasks from '@/components/Tasks'
import Backlog from '@/components/Backlog'
import Todo from '@/components/Todo'
import Done from '@/components/Done'
import Doing from '@/components/Doing'
import db from '../firebase'
export default {
  name: 'Board',
  components: {Tasks, Backlog, Todo, Doing, Done},
  data () {
    return {

    }
  },
  firebase: {
    backlog: db.ref('/backlog'),
    todo: db.ref('/todo'),
    done: db.ref('/done'),
    doing: db.ref('/doing')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.row {
  margin-bottom: 20px;
}
</style>
