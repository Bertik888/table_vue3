<template>
  <div 
    class="modal show" 
    tabindex="-1"
  > 
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>

          <button 
            type="button" 
            class="btn-close" 
            aria-label="Close"
            @click="$emit('close')"
          >
          </button>
        </div>

        <div class="modal-body">
          
          <form class="needs-validation">

            <ui-input 
              v-model="form.first_name"
              name="firstName"
              label="Имя"  
              :invalidText="invalidFirstNameText"
              class="mb-2"            
            />

            <ui-input 
              v-model="form.last_name"
              name="lastName"
              label="Фамилия"  
              :invalidText="invalidLastNameText"
              class="mb-2"            
            />

            <ui-input 
              v-model="form.birthday"
              name="birthday"
              label="Дата рождения"   
              type="date"     
              :invalidText="invalidBirthdayText"      
            />
            
          </form>
        </div>

        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-secondary" 
            @click="$emit('close')"
          >
            Закрыть
          </button>

          <button 
            type="button" 
            class="btn btn-primary"
            @click="onSubmit"
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>    
  </div>

  <div class="modal-backdrop show"></div>

</template>

<script>
import { addUser, editUser } from '@/api/api';
import UiInput from '@/components/UiInput';

  export default {
    name: 'Modal',
    
    components: {
      UiInput
    },

    props: {
      user: {
        type: Object,
        default: undefined
      }
    },

    data() {
      return {
        form: {
          first_name: '', 
          last_name: '',
          birthday: ''
        },

        touch: false
      }
    },

    computed: {      
      title() {
        return this.user ? 'Редактировать' : 'Добавить'
      },

      invalidFirstNameText() {
        if (!this.form.first_name && this.touch) {
          return 'Поле не заполнено'
        }
        if (this.form.first_name.length < 3 && this.touch) {
          return 'Минимальное количество символов 3'
        }
        return ''
      },

      invalidLastNameText() {
        if (!this.form.last_name && this.touch) {
          return 'Поле не заполнено'
        }
        if (this.form.last_name.length < 3 && this.touch) {
          return 'Минимальное количество символов 3'
        }
        return ''
      },

      invalidBirthdayText() {
        if (!this.form.birthday && this.touch) {
          return 'Введите корректную дату'
        }
        return ''
      },

      isValidForm() {
        return !this.invalidFirstNameText && !this.invalidLastNameText && !this.invalidBirthdayText
      }
    },

    mounted() {
      if (this.user) {
        this.form.first_name = this.user.first_name
        this.form.last_name = this.user.last_name
        this.form.birthday = this.user.birthday
      }      
    },

    methods: {
      async onSubmit() {
        this.touch = true
        if (this.isValidForm) {
          if (this.user) {
            editUser(this.user.id, this.form)
              .then(response => {
                this.$emit('changeUsers', response)
              }) 
          } else {
            addUser(this.form)
              .then(response => {
                this.$emit('changeUsers', response)
              }) 
          }
        }              
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.show {
  display: block !important;
}

</style>