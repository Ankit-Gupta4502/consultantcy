import { actionsFace } from "../actionInterface/interface";
import { Istate } from "../actionInterface/IAgora"
import { GET_AGORA_TOKEN_FULFILLED, GET_AGORA_TOKEN_PENDING, GET_AGORA_TOKEN_REJECTED, SET_CHANNEL_NAME, SET_MEDIA_TYPE } from "../Constant";
const inintialState: Istate = {
    loading: false,
    errors: {},
    isStart: false,
    token: '',
    channelName: '',
    mediaType: "video"
}

const AgoraReducer = (state = inintialState, action: actionsFace) => {
    switch (action.type) {
        case GET_AGORA_TOKEN_PENDING:

            return { ...state, loading: true }

        case GET_AGORA_TOKEN_FULFILLED:

            return { ...state, loading: false, errors: {}, token: action.payload, isStart: true, }

        case SET_CHANNEL_NAME:
            return { ...state, channelName: action.payload }

        case GET_AGORA_TOKEN_REJECTED:
            return { ...state, errors: action.payload, loading: false }

        case SET_MEDIA_TYPE:
            return { ...state, mediaType: action.payload }

        case "LEFT_CHANNEL":
            return { ...state, isStart: false }

        default:
            return { ...state }
    }
}

export default AgoraReducer