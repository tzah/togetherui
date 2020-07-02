<template>
    <div style="width: fit-content" class="mt-5">
           <div class="icon" style="width: fit-content">
               <v-icon>
                   {{'$'+icon}}
               </v-icon>
           </div>
           <div class="text">
               {{text}}
           </div>
    </div>
</template>

<script>
    export default {
        name: "navBarButton",
        props: {
            icon: {
                type: String
            },
            text: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    .iconContainer, .text {
        margin-right: auto;
        margin-left: auto;
    }
    .text{
        color: #79828B;
    }
    /*.icon{*/
    /*    width: 1.3vw;*/
    /*    height: 2.5vh;*/
    /*}*/
</style>
