<template>
  <div v-if="!isRoomSelect">
    <ChatList
      v-for="user in users"
      :key="user.id"
      :user="user"
      @selectChat="$emit('roomSelect', user.id)"
    />
  </div>
  <div v-else class="h-100 chat-view">

    <ChatRoom
      :selectedUser="activeUser"
      :activeUser="selectedUser"
      @back="$emit('backToChatlist')"
    />
    <ChatRoom
      :selectedUser="selectedUser"
      :activeUser="activeUser"
      @back="$emit('backToChatlist')"
    />
  </div>
</template>

<script>
  import ChatList from "../components/ChatList";
  import ChatRoom from "../components/ChatRoom";

  export default {
    name: 'ChatView',
    components: {
      ChatList,
      ChatRoom
    },
    props: {
      users: {
        type: Array
      },
      activeUser: {
        type: Object,
      },
      selectedUser: {
        type: Object,
      },
      isRoomSelect: {
        type: Boolean,
        default: false
      }
    },
  }
</script>

<style scoped>
  .chat-view {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  @media screen and (min-width: 700px) and (orientation: landscape) {
    .chat-view {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-gap: 20px;
    }
  }
</style>