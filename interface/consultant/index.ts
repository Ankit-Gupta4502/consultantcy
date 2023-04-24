export type constultantDetailType = {
    id: number,
    name?: string,
    mobile?: string,
    email?: string,
    city?: string,
    state?: string,
    pincode?: string,
    thumbnail?: string,
    consultant_slots?: { id?: number, dayIndex?: string, }[],
    consultant_sectors?: {
        id: number, subCategory?: { id: number, name_english?: string }, subSubCategory: {
            id: number,
            title_english?: string
        }
    }[] | null,
    consultant_profile: {
        experience: string,
        highestQualification?: string,
        nameOfOrgnization?: string,
        skill?: string,
        designation?: string,
        ProfileSummary?: string,
        audioFee?: number
        videoFee?: number,
        workExperience?: string,
        websiteUrl?: string
    }
}

export type consultantSlotDetails = {
    dateIndex?: string,
    id: number,
    consultant_slots: {
        startTime: string,
        endTime: string,
        slotDateId: string,
        id: number,
        timeZone?: "morning" | "evening"
        bookAppointment?:{id:string}
    }[]
}

export interface consultantSlotType {
    dateIndex?: string,
    id: number,
    consultant_slots: {
        startTime: string,
        endTime: string,
        slotDateId: string,
        id: number,
        timeZone?: "morning" | "evening"
    }[]
}
export type consultantType = {
    id: number,
    name: string,
    consultant_sectors: { id: number, consultantAudioFee?: string, consultantVideoFee?: string, subCategory: { id: number, name_english: string } }[],
    consultant_profile: { workExperience?: string, audioFee?: number, videoFee?: number } | null,
    slug: string | null,
    user_reviews: {
        rating?: number,
        comment?: string,
        id: number
    }[],
    consultant_slote_dates: consultantType[]
}
export type rating = {
    rating?: number,
    comment?: string,
    id: number
}[]
export type sectorType = {
    subCategory: { id: number, name_english: string,title_english?:string }
}[]
export type industryType = {

}
export type slotsType = {
    sector: string,
    industry: string
}
export interface consultantInfoType {
    consultancyType: "audio" | "video" | "",
    id: number,
    amount: number,
    slots?: consultantSlotType[]
}
export type consultantExpertiseType = {
    sector: { id?: number, name_english?: string }[],
    industry: { id?: number, name_english?: string, subCategoryId?: number }[]
}
export type selectedSlotType = {
    slotDateId?: number,
    timeSlotId?: number
}