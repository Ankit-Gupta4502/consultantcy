 export interface Iappointments {
    amount: number,
    id: number,
    consultancyType: "audio" | "video" | string,
    consultant: {
        name: string
    },
    channelName: string,

    consultant_slot:{

        startTime: string,
        endTime: string,
    }
    consultant_slote_date: {
        dateIndex: string
    }
}
export interface IReduxState {
    loading: boolean,
    error: any,
    appointments: Array<Iappointments>
}