

const state =  {

posts:[],

};


const getters = {



};


const mutations = {

SET_POST(state, post){

state.posts = post 
},


};


const actions = {

// The Post list API 


async postList({commit}){

	try{
	  
	  
	  const req = await this.$fire.firestore.collection('Post').get()
  
	  req.forEach((doc) => {
		  // doc.data() is never undefined for query doc snapshots
		  const post = []
  
		 console.log(doc.data())

         commit("SET_POST", doc.data())
		  
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
