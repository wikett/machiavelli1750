<template>
  <div> <!-- class="wrapper"-->
    <div> <!--class="main-panel"-->
      <top-navbar></top-navbar>

      <dashboard-content>

      </dashboard-content>

      <!--<content-footer></content-footer>-->
    </div>
  </div>
</template>

<script>
  import TopNavbar from "@/components/UIComponents/TopNavbar.vue";
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    }
  }

</script>
<style scoped>
html,body {
   background-image: none;
   color:red;
}
</style>
