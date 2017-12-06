<template>
  <div class="hello">
    <Tasks/>
    <p>Hello there</p>
    <div class="row">
      <div class="col-md-3">
        <Backlog :tasks="backlog"/>
      </div>
      <div class="col-md-3">

      </div>
      <div class="col-md-3">

      </div>
    </div>
  </div>
</template>

<script>
import Tasks from '@/components/Tasks'
import Backlog from '@/components/Backlog'
import db from '../firebase'
export default {
  name: 'Board',
  components: {Tasks, Backlog},
  data () {
    return {

    }
  },
  firebase: {
    backlog: db.ref('/backlog')
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
