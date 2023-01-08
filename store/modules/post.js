
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
  
	const posts = req.docs.map((doc) => doc.data());
	console.log(posts)

	commit("SET_POST", posts)
		
	   
	
	  
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
