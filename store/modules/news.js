
const config={
			headers:{
				"X-Api-Key": "46afb473359e4504b833abf4cb8ef172"
			
			  }
		
		}

const endPoint = "https://newsapi.org/v2/top-headlines?country=us"

const businessnewsendPoint = "https://newsapi.org/v2/top-headlines?country=us&category=business"

const state =  {

	news:[],
	businessNews:[],
	entertainmentNews:[],
	sportNews:[],
	technologyNews:[],
	scienceNews:[],
	trendingNews:[],
	filteredNews:[],

};


const getters = {



};


const mutations = {

	SET_NEWS(state, news){

		state.news = news 
	},

	SET_BUSINESS_NEWS(state, businessNews){
		state.businessNews = businessNews

	}

	

};

const actions = {

 // The News list API 

async newsList({commit}){

	try{

		
		const req = await this.$axios.$get(endPoint, config)
		const news  	= req.articles
	
		commit('SET_NEWS', news)

		console.log(news)

	}
	catch(e){

		console.log(e)
	}

},

async businessnewsList({commit}){

	try{

		
		const req = await this.$axios.$get(businessnewsendPoint, config)
		const businessNews  	= req.articles

		console.log(businessNews)

	
		commit('SET_BUSINESS_NEWS', businessNews)

	
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