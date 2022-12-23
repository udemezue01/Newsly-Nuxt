

const state =  {

	news:[],
	filteredNews:[],

};


const getters = {



};


const mutations = {

	SET_NEWS(state, news){

		state.news = news 
	},

	

};

const actions = {

 // The News list API 

async newsList({commit}){

	try{

		const config={
			headers:{
				"X-Api-Key": "46afb473359e4504b833abf4cb8ef172"
			
			  }
		
		}
		
		// const endPoint = "https://newsapi.org/v2/top-headlines?country=us"
		const response = await this.$axios.$get(endPoint, config)
		const news  	= response.articles

		commit('SET_NEWS', news)


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