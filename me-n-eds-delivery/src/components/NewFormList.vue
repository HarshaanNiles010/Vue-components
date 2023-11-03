<template>
    <div>
        <h1>User Input List</h1>
        <input v-model="newItem" @keydown.enter="addItem" placeholder="Enter an item" />
        <button @click="addItem">Add</button>
        <ul>
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
                <button @click="removeItem(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: '',
      items: []
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.items.push(this.newItem);
        this.newItem = '';
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>