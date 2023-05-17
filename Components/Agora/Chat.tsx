import React, { useState, useEffect } from 'react'
import { HiOutlinePaperAirplane } from "react-icons/hi"
import { useAppSelector } from '../../hooks'
import { io, } from 'socket.io-client'
const Chat = ({ active }: { active: boolean }) => {
    const [message, setMessage] = useState('')
    const { AuthReducer: { auth }, AgoraReducer: { channelName } } = useAppSelector(state => state)
    const [messages, setMessages] = useState<{ message: "", id: number }[]>([])
    const socket = io("http://localhost:8080/")

    useEffect(() => {
        socket.on('connection', (io) => {
            io.on('disconnect', () => {
                console.log('user disconnected');
            });
        });

        socket.emit("join",channelName)

        socket.on(channelName, (msg) => {
            setMessages(prev => [...prev, msg])
        })
        return (() => {
            socket.off("chat")
            socket.off("connection")
        })
    }, [])


    const sendMessage = () => {
        socket.emit(channelName, {message,id:auth.id});
    }


    return (
        <div className={`h-full rounded-2xl bg-white transition-all duration-500 ease-in-out  ${active ? " basis-72 px-4 " : "basis-0  w-0   "}  py-3  flex flex-col justify-between gap-6 overflow-hidden`}  >
            <div className='flex flex-col gap-2 ' >
                {
                    messages.map((item, index) => {
                        return <div className={` ${item.id === auth.id ? " bg-stone-200 self-end" : "self-start bg-primary/20"}   px-4 py-2 rounded-3xl `} key={index} >
                            <p className='mb-0  text-sm' >

                                {item.message}
                            </p>
                        </div>
                    })
                }
            </div>
            <div className='relative' >
                <input value={message} type="text" onChange={(e) => setMessage(e.target.value)} placeholder='Send Message' className='w-full bg-white rounded-full py-2 px-3 border border-stone-300 ' />
                <button className=' z-20 w-8 h-8 absolute right-2 top-1   rounded-full bg-primary text-white grid place-items-center' onClick={sendMessage}  >
                    <HiOutlinePaperAirplane size={18} className=' rotate-90 ' />
                </button>
            </div>
        </div>
    )
}

export default Chat