<template>
    <q-page padding>
        <QJitsiForm @submit="onSubmit" />
        {{ datasubmit }}
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            datasubmit: 'datasubmit'
        }
    },
    methods: {
        onSubmit(value) {
            this.datasubmit = value
            console.log('value :>> ', value);
        }
    }
}
</script>

<style>
</style>