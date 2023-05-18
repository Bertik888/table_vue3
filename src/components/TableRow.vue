<template>
  <tr>
    <td>{{ item.first_name }}</td>
    <td>{{ item.last_name }}</td>
    <td>{{ item.birthday }}</td>
    <td class="text-center">
      <i 
        class="bi bi-pencil-square text-primary me-3 cursor-pointer"
        @click="isShowModal = true"
      ></i>

      <i 
        class="bi bi-trash text-danger cursor-pointer"
        @click="remove"
      ></i>
    </td>
  </tr>

  <modal 
    v-if="isShowModal"
    :user="item"
    @close="isShowModal = false"
    @changeUsers="$emit('changeUsers', $event), isShowModal = false"    
  />

</template>

<script>
import Modal from '@/components/Modal.vue'
import { removeUser } from '@/api/api'

  export default {
    name: 'TableRow',

    components: {
      Modal
    },

    props: {
      item: {
        type: Object,
        required: true        
      }
    },

    data() {
      return {
        isShowModal: false
      }
    },

    methods: {
      async remove() {
        removeUser(this.item.id)
          .then(response => {
            this.$emit('changeUsers', response)
          })
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>