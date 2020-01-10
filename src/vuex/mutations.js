import * as types from './mutation-types'

const mutations = {
    [types.SET_FOOTER_BAR_STATE] (state, val) {
        state.showFooterBar = val
    }
}

export default mutations