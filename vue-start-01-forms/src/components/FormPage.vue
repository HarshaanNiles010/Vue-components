<template>
    <div class="container mb-3">
        <form action="">
            <div class="mb-3">
                <label for="" class="form-label">
                    Page Title
                </label>
                <input
                type="text"
                class="form-control"
                :value="PageTitle"
                />
            </div>
            <div class="mb-3">
                <label for="" class="form-label">
                    Content
                </label>
                <textarea
                type="text"
                class="form-control"
                rows="3"></textarea>
            </div>
            <div class="mb-3">
                <button
                class="btn btn-primary"
                @click.prevent="PageCreated({PageTitle})"
                >Create Page</button>
            </div>
        </form>
    </div>
</template>

<script>
export default{
    props:['PageCreated'],
    data() {
        return {
            PageTitle:''
        }
    }
}

</script>