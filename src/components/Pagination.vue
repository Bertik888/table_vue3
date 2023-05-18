<template>
  <nav v-if="total > maxItems">
    <ul class="pagination">
      <li 
        class="page-item"  
        :class="{ 'disabled': currentPage === 1 }"    
      >
        <div 
          class="page-link cursor-pointer"
          @click="prevPage"
        >
          <span>&laquo;</span>
        </div>
      </li>

      <li 
        v-for="item in countPage"
        :key="item"
        class="page-item"
        :class="{ 'active': currentPage === item }"
      >
        <div 
          class="page-link cursor-pointer"
          @click="setPage(item)"
        >
          {{ item }}
        </div>
      </li>

      <li 
        class="page-item"
        :class="{ 'disabled': currentPage === countPage }"
      >

        <div 
          class="page-link cursor-pointer"
          @click="nextPage"
        >
          <span>&raquo;</span>
        </div>

      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Pagination',

    props: {
      total: {
        type: Number,
        default: 0
      },

      currentPage: {
        type: Number,
        default: 1
      },

      maxItems: {
        type: Number,
        default: 3
      }
    },

    computed: {
      countPage() {
        return Math.ceil(this.total / this.maxItems)
      }
    },

    methods: {
      prevPage() {
        if (this.currentPage > 1) {
          this.$emit('changePage', this.currentPage - 1)
        }        
      },

      setPage(item) {
        this.$emit('changePage', item)
      },

      nextPage() {
        if (this.currentPage < this.countPage) {
          this.$emit('changePage', this.currentPage + 1)
        }        
      }
    }
  }
</script>