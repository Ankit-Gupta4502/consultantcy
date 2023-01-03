import React from "react"
import dynamic from "next/dynamic"
interface propsTypes {
    children?: any
}
const NoSSR = (({ children }: propsTypes) => {
    return <> {children} </>
})

export default dynamic(() => Promise.resolve(NoSSR), {
    ssr: false
})