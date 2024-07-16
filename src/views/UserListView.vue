<template>
  <div class="user-list-view">
    <div class="user-list-view__list" ref="userList">
      <UserCard v-for="user in users" :key="user.login.uuid" :user="user" />
    </div>
    <div class="user-list-view__loading" v-if="loading">Loading...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import UserCard from '@/components/UserCard.vue'
import { fetchUsers } from '@/api/UserService'

const users = ref([])
const page = ref(1)
const loading = ref(false)
const initialLoad = ref(true)

/**
 * Load users from the API.
 * @param {number} count - Number of users to load.
 */
const loadUsers = async (count = 10) => {
  loading.value = true
  const data = await fetchUsers(page.value, count)
  users.value.push(...data.results)
  page.value++
  loading.value = false

  if (initialLoad.value) {
    checkIfMoreUsersNeeded()
    initialLoad.value = false
  }
}

/**
 * Handle scroll event to load more users when reaching the bottom.
 */
const handleScroll = () => {
  const bottomOfWindow =
    window.innerHeight + window.scrollY >=
    document.documentElement.offsetHeight - 100
  if (bottomOfWindow && !loading.value) {
    loadUsers()
  }
}

/**
 * Check if more users need to be loaded to fill the screen.
 */
const checkIfMoreUsersNeeded = () => {
  nextTick(async () => {
    while (
      window.innerHeight >= document.documentElement.offsetHeight &&
      !loading.value
    ) {
      await loadUsers(10)
    }
  })
}

onMounted(async () => {
  await loadUsers(10)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.user-list-view {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__loading {
    margin: 20px;
    font-size: 16px;
  }
}
</style>
