
const state =  {

    auth :[],
    
    };
    
    
    const getters = {
    
    
    
    };
    
    
    const mutations = {
    
    // SET_POST(state, posts){
    
    // state.posts = posts 
    // },
    
    
    };
    
    
    const actions = {
    
    // The Post list API 
    async userCreate({commit} ){

        try{

           const req = await this.$fire.firestore.collection('Post').get()

        }

        catch(e){

            console.log(e)
        }

    },
    
    async userLogin({commit}, ...userDetails){
    
        try{
          
          
        //   const req = await this.$fire.firestore.collection('Post').get()
      
        // const posts = req.docs.map((doc) => (
    
        //     {
        //     id:doc.id,
        //     ...doc.data()
        //     }
    
        // ));
        
    
        // commit("SET_POST", posts)
            
           
        
          
          }
          catch(e){
          
          console.log(e)
          }
          
          },



        async passReset({commit}, ...userDetails){
    
        try{
          
          
        //   const req = await this.$fire.firestore.collection('Post').get()
      
        // const posts = req.docs.map((doc) => (
    
        //     {
        //     id:doc.id,
        //     ...doc.data()
        //     }
    
        // ));
        
    
        // commit("SET_POST", posts)
            
           
        
          
          }
          catch(e){
          
          console.log(e)
          }
          
          },
      


        async googleLogin({commit}, ...userDetails){
                    
            try {

              const provider = new this.$fireModule.auth.GoogleAuthProvider()

              const user = await this.$fire.auth.signInWithPopup(provider)

              console.log(user) 

              this.$router.push('/') 

                } 

                catch (e) {
                  console.log(e)
                }

                  
          },
      
    
    

    
    };
    
    
    export default {
    
    state,
    getters,
    mutations,
    actions,
    }
    