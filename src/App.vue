<template>
    <v-app fill-height>
        <v-content>
            <shell>
               <nav-bar slot="navBar"/>
                <div slot="content"></div>
            </shell>
        </v-content>
    </v-app>
</template>

<script>
    import Shell from "./components/mainPage/shell";
    import NavBar from "./components/mainPage/navBar/navBar";

    export default {
        name: 'App',

        components: {NavBar, Shell},

        data(){
            return{

            }
        }
    };
</script>
<style scoped lang="scss">
</style>
