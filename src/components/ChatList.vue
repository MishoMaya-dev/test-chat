<template>
  <div>
    <div class="list-group-item list-group-item-action rounded" @click="selectChatRoom">
      <div>
        <img
          :src="user.url"
          alt="avatar"
          class="avatar mr-3"
        >
        <span class="font-weight-bold">{{ user.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatList',
    props: {
      user: {
        type: Object
      }
    },
    methods: {
      selectChatRoom() {
        this.$emit('selectChat', this.user.id)
      }
    }
  }
</script>

<style scoped>

</style>