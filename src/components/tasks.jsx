import React, { useState } from "react";
import api from "../services/api"

const Tasks = ({ data, set }) => {

    const [status, setStatus] = useState('Pending')

    const complete = (id) =>{
        api
            .remove(id)
            set(data.filter((value) => {
                setTimeout(5000)
                return value.id !== id
            }))
            
    }


    return (
        data.map(task => {
            return (
                <div key={task.id} class="flex flex-col gap-3 items-center rounded-2xl bg-[#ffce97] pt-6 pb-6">

                    <h2 class="text-[30px] text-purple-800">#{task.id} Task</h2>

                    <p class="text-[25px]"> <strong class="">Task: </strong> {task.task}</p>

                    <p class="text-[25px]"><strong class="text-black">Important: </strong>{task.important}</p>

                    <p class="text-[25px] text-red-500"><strong class="text-black">Status: </strong> {status}</p>

                    <button onClick={() => complete(task.id)} class="text-[20px] border-2 border-solid border-white rounded hover:bg-green-500 focus:outline-none text-white bg-[#54B435] py-1 w-24 mt-2">Done</button>

                </div>
            )
        })
    )
}

export default Tasks