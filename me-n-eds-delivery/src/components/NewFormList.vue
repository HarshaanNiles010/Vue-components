<template>
    <div v-show="inputField">
        <input type="email" v-model="email"/>
        <button @click="submitEmail">Submit</button>
    </div>

    <div v-show="showListBool">
        <li v-for="(item,index) in items" :key="index">
            {{ item.email }}
        </li>
        <div v-show="removeEmailBtn">
            <button @click="removeEmail">Remove</button>
        </div>
    </div>
    <div v-show="EmptyList">
        <h1>The list is empty, add another entry for it to show up in the list</h1>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    
    const inputField = ref(true);
    const showListBool = ref(false);
    const EmptyList = ref(false);
    const removeEmailBtn = ref(true);

    const email = ref('Hi@abc.com');
    const parentMessage = ref('Parent');
    const items = ref(
        [{email: 'Hi@abc.com'},
        {email: 'Bye@abc.com'}]
    )
    function submitEmail(){
        inputField.value = false;
        showListBool.value = true;
        removeEmailBtn.value = true;
        EmptyList.value = false;
        items.value.push({email: email.value})
    }
    function removeEmail(){
        if (items.value.length > 0){
            items.value.pop();
        }
        else{
            removeEmailBtn.value = false;
            inputField.value = true;
            EmptyList.value = true;
        }
    }

</script>