

const state =  {

posts:[],

};


const getters = {



};


const mutations = {

SET_POST(state, posts){

state.posts = posts 
},


};


const actions = {

// The Post list API 


async postList({commit}){

	try{
	  
	  
	  const req = await this.$fire.firestore.collection('Post').get()
  
	  req.forEach((doc) => {
		  // doc.data() is never undefined for query doc snapshots

		  const posts = doc.data()
		  

		  console.log(posts)

         commit("SET_POST", posts)
		  
		});
		
	   
	
	  
	  }
	  catch(e){
	  
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
