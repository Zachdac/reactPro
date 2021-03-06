import { toggle, sideMenu } from './siderToggleReducer.js'
import { isFetching, getData, test } from './fetchReducer.js'

export default (state = {}, action) => {
	return {
		collapsed: toggle(state.collapsed, action),
		isFetching: isFetching(state.isFetching, action),
		userdata: getData(state.data, action),
		sideMenu: sideMenu(state.sideMenu, action),
	}
}