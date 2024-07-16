<template>
  <div class="user-card">
    <img class="user-card__image" :src="user.picture.medium" alt="User photo" />
    <div class="user-card__info">
      <h3 class="user-card__name">
        {{ user.name.first }} {{ user.name.last }}
      </h3>
      <p class="user-card__email">{{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.user-card {
  width: 350px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  margin: 8px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }

  &__image {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-right: 16px;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__name {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    color: #212121;
  }

  &__email {
    margin: 4px 0 0;
    font-size: 14px;
    color: #757575;
  }
}
</style>
