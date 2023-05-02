import axios from "axios";
import { GET_AGORA_TOKEN_FULFILLED, GET_AGORA_TOKEN_PENDING, GET_AGORA_TOKEN_REJECTED, SET_CHANNEL_NAME, SET_MEDIA_TYPE } from "../Constant";
import { AppDispatch } from "../store";

export const getAgoraToken = (channelName: string = "", mediaType: "audio" | "video" = "video") => async (dispatch: AppDispatch) => {
    try {
        dispatch({ type: GET_AGORA_TOKEN_PENDING })
        const response = await axios(`/api/mobile/v1/get-rtc-token?channelName=${channelName}`)
        dispatch({ type: SET_CHANNEL_NAME, payload: channelName })
        dispatch({ type: SET_MEDIA_TYPE, payload: mediaType })
        dispatch({ type: GET_AGORA_TOKEN_FULFILLED, payload: response.data?.data, })
    } catch (error) {
        dispatch({ type: GET_AGORA_TOKEN_REJECTED, error })
    }
}