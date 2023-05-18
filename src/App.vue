<template>
  <div class="container">

    <div class="row mt-4">
      <div class="col d-flex justify-content-end">
        <button           
          type="button" 
          class="btn btn-primary"
          @click="isShowModal = true"
        >
          Добавить
        </button>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <div class="table-responsive">
          <table class="table table-bordered my-table">
            <thead class="table-light">
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Фамилия</th>
                <th scope="col">Дата рождения</th>
                <th scope="col" class="my-table__th"></th>
              </tr>
            </thead>

            <tbody>
              <table-row
                v-for="user in paginationUsers"
                :key="user.id"
                :item="user"  
                @changeUsers="changeUsers"            
              />  
            </tbody>
          </table>
        </div>
        
      </div>
    </div>

    <div class="row mt-4">
      <div class="col d-flex justify-content-center">
        <pagination 
          :total="users.length"
          :currentPage="currentPage"
          :maxItems="3"
          @changePage="changePage"        
        />
      </div>
    </div>

    <modal 
      v-if="isShowModal"
      @close="isShowModal = false"
      @changeUsers="changeUsers"
    />

  </div>

</template>

<script>
// user.id = Math.random().toString(36).slice(4)
import { getUsers } from '@/api/api'

import TableRow from '@/components/TableRow.vue'
import Pagination from '@/components/Pagination.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: {
    TableRow,
    Pagination,
    Modal
  },

  data() {
    return {
      isShowModal: false,
      users: [],
      currentPage: 1
    }
  },

  computed: {
    paginationUsers() {
      const start = (this.currentPage - 1) * 3 
      const end = start + 3
      return this.users.slice(start, end)
    }
  },

  mounted() {
    this.getUsers()
  },

  methods: {    
    async getUsers() {
      getUsers().then((response) => {
        this.users = response
      })
    },

    changeUsers(users) {
      this.users = users
      this.isShowModal = false
    },

    changePage(page) {
      this.currentPage = page
    }
  },
  
}
</script>

<style lang="scss">
.cursor-pointer {
  cursor: pointer;
}

.my-table td {
  word-break: break-word;
}

.my-table__th {
  min-width: 80px;
}

</style>
