<template>
  <div class="shadow p-3 bg-white rounded chat-room">
    <div
      class="header bg-white border-bottom pb-2 d-flex justify-content-between align-items-end"
      style="z-index: 1"
    >
      <button class="btn btn-link" @click="backToList">
        <img class="icon" src="../assets/back.svg" alt="back">
      </button>
      <div>
        <div class="d-flex flex-column align-items-center">
          <img
            :src="selectedUser.url"
            alt="avatar"
            class="avatar mb-1"
          >
          <span class="font-weight-bold">{{ selectedUser.name }}</span>
        </div>
      </div>
      <div>
        <button class="btn btn-link" @click="clearDialog">
          <img class="icon" src="../assets/clear.svg" alt="">
        </button>
      </div>
  </div>
    <div class="messages" ref="refMessages">
      <div v-for="message in messages" :key="message.id">
        <div
          class="mb-1 border rounded-pill d-flex justify-content-start align-items-center"
          :class="{
            'flex-row-reverse': message.user.uid === activeUser.id
          }"
        >
          <img
            :src="message.user.url"
            alt="avatar"
            class="avatar m-1 p-1 "
            :class="message.user.uid === activeUser.id ? 'border-left' : 'border-right'"
          >
          <span class="pr-3 py-2" style="font-size: 13px">{{ message.text }}</span>
        </div>
      </div>
    </div>
    <div class="footer mt-2 input-group">
      <textarea
        rows="2"
        class="form-control"
        style="resize: none"
        placeholder="Введите сообщение"
        v-model="text"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          :disabled="disableButton"
          @click="sendMessage"
        >
          Отправить
        </button>
      </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'ChatRoom',
    props: {
      selectedUser: {
        type: Object
      },
      activeUser: {
        type: Object
      }
    },
    data: () => ({
      text: ''
    }),
    computed: {
      messages() {
        return this.$store.getters.messages
      },
      disableButton() {
        return !this.text
      }
    },
    watch: {
      messages: function () {
        if (this.text === '') {
          setTimeout(() => {
            this.scrollToBottom()
          },1)
        }
      }
    },
    methods: {
      sendMessage() {
        const message = {
          user: this.activeUser,
          text: this.text
        }
        this.$store.dispatch('addMessage', message)
        this.text = ''

      },
      backToList() {
        this.$emit('back')
        this.clearDialog()
      },
      clearDialog() {
        this.$store.dispatch('clearMessages')
      },
      scrollToBottom() {
        const { scrollHeight, clientHeight } = this.$refs.refMessages;
        this.$refs.refMessages.scrollTop = scrollHeight - clientHeight;
        console.log(this.$refs.refMessages)
      },
    }
  }
</script>

<style scoped>
.icon {
  width: 25px;
}
.chat-room {
  display: flex;
  flex-direction: column;
  height: calc(55vh - 100px);
}
.header {
  flex: 0 0 auto;
}
.messages {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  overflow-y: auto;
}
.footer {
  flex: 0 0 auto;
}

@media screen and (min-width: 700px) and (orientation: landscape) {
  .chat-room {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
  }
}

</style>