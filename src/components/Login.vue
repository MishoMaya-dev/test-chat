<template>
  <div class="border rounded p-3 chat-login" style="margin: 0 auto">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Имя или Никнейм</label>
        <input type="text" class="form-control" v-model="name" required>
      </div>
      <div class="form-group">
        <label>Загрузите аватар</label>
        <input type="text" class="form-control" v-model="url" required>
        <small class="form-text text-muted">URL картинки</small>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data: () => ({
      name: '',
      url: ''
    }),
    methods: {
      onSubmit() {
        const user = {
          name: this.name,
          url: this.url
        }
        this.$emit('createUser', user)
      }
    }
  }
</script>

<style scoped>
  .chat-login {
    width: 100%;
  }
  @media screen and (min-width: 1024px) and (orientation: landscape) {
    .chat-login {
      width: 50%;
    }
  }
</style>