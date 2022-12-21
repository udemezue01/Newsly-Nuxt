


const state =  {

	news:[],
	portfolio:'',

};


const getters = {



};


const mutations = {

	

};

const actions = {

 // The News list API 

async newsList({commit}){

	try{


		// const response = await apolloClient.query({query: PORTFOLIO_LIST})
		// const news = JSON.stringify(response.data.portfolios)
		// commit('SET_NEWS', news)

		// console.log(news)

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