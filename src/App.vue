<template>
    <v-app>
        <v-content>
            <shell>
                <div slot="navBar" class="navBar">

                </div>
                <div slot="content"></div>
            </shell>
        </v-content>
    </v-app>
</template>

<script>

    import Shell from "./components/mainPage/shell";
    export default {
        name: 'App',

        components: {Shell},

        data: () => ({
            //
        }),
    };
</script>
<style scoped lang="scss">
    .navBar{
        background-color: #F8F8F8;
    }
</style>
