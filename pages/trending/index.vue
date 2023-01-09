<template>
    <div>
    
    
    
        <section class="text-gray-600 font-body">
          <div class="container m-auto flex px-5 py-24 items-center justify-center flex-col">
            
            <div class="text-center lg:w-2/3 w-full space-y-10">
              <h1 class="title-font text-3xl xl:text-5xl font-bold text-gray-900">Trending </h1>
              <p class="mb-8 leading-relaxed text-2xl">Locate articles and breaking news headlines from news sources and blogs.</p>
            
            </div>
          </div>
        </section>
    
    
        <!-- The news section -->

        <section class="text-gray-600 bg-gray-100 font-body">
  <div  class="container px-5 py-24 mx-auto" >
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-12"  >
      
        
      <div  class=""  v-for="post in posts" :key="post.index">
        <div  class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="post.featured_image" alt="blog">
          <div class="p-6">
            <h2 class="tracking-wider text-sm font-black uppercase text-green-500 mb-1">{{ post.tag }} </h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3 truncate"> {{ post.title }}</h1>
            <p class="leading-relaxed mb-3 line-clamp-3"> {{ post.content }}</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0" href="article.url">Read More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    
    </div>
            
        </template>
            

  <script>
  import { mapState } from 'vuex'
  export default {
    name:"Trending",
  
  computed: {
  
      ...mapState({
        posts: state => state.post.posts
  
      })
    },
  created(){
  
    this.$store.dispatch('postList')
  }
  
  }
  </script>
            