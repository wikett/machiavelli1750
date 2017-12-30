<template>
    <div class="columns">
    	
    	
       	<admin-sidebar></admin-sidebar>
       	
       
       <div class="column is-10 ">
       		<h1>Overview</h1>
       </div>

    </div>
</template>

<script>
import AdminSidebar from "@/components/UIComponents/AdminSidebar.vue";

    export default {
    components: {
      AdminSidebar
    }
  }
</script>
<style scoped>
h1{
	color:white;
}
</style>