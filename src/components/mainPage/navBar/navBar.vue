<template>
    <v-container class="navBar">
        <v-row style=" padding-top: 1vh">
            <v-col cols="3" style="padding-left: 2vw;">
               <SettingsIcon/>
            </v-col>
            <v-spacer/>
            <v-col cols="1" style="padding-right: 3vw; padding-top: 17px">
                <v-icon>$home</v-icon>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <transition name="fade">
                    <profile-image class="userDetails"/>
                </transition>
            </v-col>
        </v-row>
        <v-row v-for="item in navBarMenu" :key="item.id">
            <v-col>
                <nav-bar-button :icon="item.icon" :text="item.text" class="navBarMenuItem"/>
            </v-col>
        </v-row>
        <router-link to="/foo">
            tzhai
        </router-link>
        <v-row style="height: 29vh"/>
        <v-row class="footer">
            <v-col>
                <div class="footerSpacer">
                </div>
            </v-col>
        </v-row>
       <div style="width: fit-content" class="socialMenu">
           <v-row dense class="socialMenu">
               <v-col v-for="item in socialMenu" :key="item.id" class="ml-3">
                   <img :src="item.src">
               </v-col>
           </v-row>
       </div>
    </v-container>
</template>

<script>
    import ProfileImage from "../ProfileImage";
    import NavBarButton from "./navBarButton";
    import SettingsIcon from "../../Icons/SettingsIcon";
    export default {
        name: "navBar",
        components: {SettingsIcon, NavBarButton, ProfileImage},
        data() {
            return {
                navBarMenu: [
                    {id: 1, icon: "megaPhone", text: "Notifications"},
                    {id: 2, icon: "myCards", text: "My-Cards"},
                    {id: 3, icon: "heart", text: "Favorite"},
                    {id: 4, icon: "group", text: "Groups"},
                ],
                socialMenu:[
                    {id: 1, src:require("../../../assets/LinkdinLogo.svg")},
                    {id: 2, src:require("../../../assets/OneNoteLogo.svg")},
                    {id: 3, src:require("../../../assets/InstegramLogo.svg")},
                    {id: 4, src:require("../../../assets/YouTubeLogo.svg")},
                ]
            }
        }
    }
</script>

<style scoped>
    .navBar {
        background-color: #F8F8F8;
    }

    .userDetails, .navBarMenuItem, .footer, .socialMenu {
        margin-left: auto;
        margin-right: auto;
    }

    .footerSpacer {
        height: 5px;
        border: 1px solid #295A84;
    }
</style>
