<template>
  <div class="h-100 overflow-hidden main-layout">
    <nav class="navbar navbar-dark bg-dark p-3">
      <span class="navbar-brand">Chat</span>
      <button
        v-if="isActiveUser"
        type="button"
        class="btn btn-danger align-items-end"
        @click="logout"
      >Выйти</button>
    </nav>
    <div class="p-3">
      <Login
        v-if="!isActiveUser"
        @createUser="createUser"
      />
      <ChatView
        v-else
        :users="users"
        :activeUser="activeUser"
        :selectedUser="selectedUser"
        :isRoomSelect="isRoomSelect"
        @roomSelect="roomSelect"
        @backToChatlist="backToChatlist"
      />
    </div>
  </div>

</template>

<script>
  import Login from "../components/Login";
  import ChatView from "../views/ChatView";

  export default {
    name: 'MainLayout',
    components: {
      Login,
      ChatView
    },
    data: () => ({
      isActiveUser: false,
      isRoomSelect: false,
    }),
    computed: {
      users() {
        return this.$store.getters.users
      },
      activeUser() {
        return this.$store.getters.activeUser
      },
      selectedUser() {
        return this.$store.getters.selectedUser
      }
    },
    methods: {
      createUser(user) {
        this.isActiveUser = true
        this.$store.dispatch('createUser', user)
      },
      roomSelect(id) {
        this.isRoomSelect = true
        this.$store.dispatch('fetchSelectedUser', id)
      },
      backToChatlist() {
        this.isRoomSelect = false
        this.$store.dispatch('clearSelectedUser')
      },
      logout() {
        this.isActiveUser = false
        this.isRoomSelect = false
        this.$store.dispatch('deleteUser', this.activeUser.id)
        this.$store.dispatch('clearMessages')
      },
    }
  }
</script>

<style scoped>
.main-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}
</style>