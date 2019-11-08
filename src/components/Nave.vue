
<template>
<div >
      <!-- <sidebar-menu :menu="menu" /> -->
 
<!-- <SidebarCustom> -->
<div class="header">
  
  
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
        <b-navbar toggleable="lg" type="light" class="navs">
                <!-- <b-navbar-brand href="#">Untitled </b-navbar-brand> -->
                 <div class="float-left title">
                <span class="bot-indicator"></span>
                <p class="un">Untitled <i class="fas fa-external-link-alt icon-style"></i></p>
            </div>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>


                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        
                        <b-nav-form>
                            <b-button href="#" size="sm" class="my-2 my-sm-0 sam">Upgrade Plan</b-button>
                            <b-button href="#" size="sm" class="my-2 my-sm-0 sam1">Need help?</b-button>
                        </b-nav-form>

                        <!-- <img class="ico" src="./asset/jpg/a.jpg" alt="image" style="margin-left: 5px"> -->

                        <b-nav-item-dropdown right>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href='/login' >
signout
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
    </div>
    <Tab/>
</div>

</template>

<script>
import Tab from './Tab'
import { SidebarMenu } from 'vue-sidebar-menu'
// import SidebarCustom from './SidebarCustom'
export default {
  name: "Nave",
  components:{
    Tab,
    SidebarMenu,
    // SidebarCustom
  },
     props : ['user'],
     
  data() {
            return {
                authenticated: false,
                menu: [
                {
                    href: '/Bot',
                    title: 'Create Bot',
                    icon: 'fa fa-user'
                },
                {
                    href: 'Nave',
                    title: 'Chat',
                    icon: 'fas fa-robot'
                },
                // {
                //      href: 'mdv',
                //     title: 'menu',
                //     icon: 'fas fa-chart'
                // }
            ]
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            },
            
        }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
        background-color: #f0f4f7;
    width: 100%;
    /* margin-left: 50px; */
}
.sam{
    margin-right:20px; 
    color: white !important;
    background-color: #5ac0de;
}
.sam:hover{
    background-color: #5ac0de;
   border-color: #5ac0de;
}
.sam-secondary:hover{
    background-color: #5ac0de;
}
.sam1{
    background-color:#13254b;
    border-color:  #13254b;
    color: white !important;
    }
    .sam1:hover{
        background-color: #13254b;
        border-color:  #13254b;
    }
    .sam1-secondary:hover{
        border-color:  #13254b;

    }
    .title {    
    padding-top: 10px;
    padding-left: 30px;
    color: blue;
}
 .bot-indicator {
position: absolute;
border-radius: 50%;
width: 10px;
height: 10px;
top: 15px;
left: 10px;
background-color: #2bbb5f;
 }
 .un{
   cursor: pointer;
 }
 .navbar {
     padding: 0px !important;
     }
</style>
