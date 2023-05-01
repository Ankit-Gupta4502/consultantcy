export interface IAppointments {
    amount: number,
    id: number,
    consultancyType: "audio" | "video",
    user: {
        name: string
    },
    channelName: string,
    consultant_slot: {
        startTime: string,
        endTime: string,
    }
    consultant_slote_date: {
        dateIndex: string
    }
}
export interface Istate {
    error: any,
    loading: boolean,
    appointments: Array<IAppointments>
}