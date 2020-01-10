import * as types from './mutation-types'
const actions = {
    setFooterBarState({ commit }, state) {
        commit(types.SET_FOOTER_BAR_STATE, state)
    }
}

export default actions