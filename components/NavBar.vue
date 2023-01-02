<template>


    <!--   The navigational bar section -->
  
      <nav class="bg-white flex font-body text-md justify-between py-4 px-6 lg:px-32 items-center shadow-sm sticky top-0">
        
        <div class="text-white text-center">
  
          <NuxtLink to ="/" class="text-gray-800 font-body font-black flex justify-between items-center tracking-wider ">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chart-donut h-10 w-10"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-3.8a4.1 4.1 0 1 1 -5 -5v-4a0.9 .9 0 0 0 -1 -.8" />
            <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a9 9 0 0 0 -1 -1v-4.5" />
          </svg>


          Newsly
        </NuxtLink>
        </div>
  
        <div class="flex items-center space-x-4 hidden lg:block text-lg">
  
          <NuxtLink to="/" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md "> Home</NuxtLink>
  
          <NuxtLink to="/business" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> Business</NuxtLink>

          <NuxtLink to="/entertainment" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> Entertainment</NuxtLink>

          <NuxtLink to="/sports" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> Sports</NuxtLink>

          <NuxtLink to="/technology" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> Technology</NuxtLink>

          <NuxtLink to="/science" class="capitalize px-3 py-3 hover:bg-gray-50 rounded-md"> Science</NuxtLink>
  
  
          
  
        </div>
  
        
        <div class="hidden xl:block">

          <NuxtLink to="/general">
        


            <button class="inline-flex text-white bg-green-500 border-0 space-x-2 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
            </svg>
              Trending

            </button>

          </NuxtLink>
       
      
      </div>
        
  
        <!-- The navbar toggle section -->
        <div class="lg:hidden items-center">
  
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
          
        </div>
  
        <!-- End of the navbar toggle section -->
  
      </nav>
  
     <!--  End of the navigational bar section -->
    
      
   
  </template>
  

  <script>
export default {
  name:"",
}
</script>
