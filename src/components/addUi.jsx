import React from "react";
import { useState } from "react";
import api from "../services/api"

const Modal = ({ isVisible, set, tasks, dataSet }) => {
    const [newTask, setNewTask] = useState('');
    const [newImp, setNewImp] = useState('');

    const task = (e) => {
        setNewTask(e.target.value)
    }

    const imp = (e) => {
        setNewImp(e.target.value);
    }

    const toggle = () => {
        if (isVisible === true) {
            set(false);
        }
    }

    const add = (event) => {
        if (newTask != "" && newImp != "") {
            const newValue = {
                id: tasks.length + 1,
                task: newTask,
                important: newImp,
                status: 0
            }
            api
                .add(newValue)
                .then(response => {
                    dataSet(tasks.concat(response))
                    toggle()
                    setNewTask('')
                    setNewImp('')
                })
        }

    }


    if (!isVisible) {
        return null;
    }
    else {
        return (
            <div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div class="w-[450px]">
                    <form class="bg-white rounded-3xl  p-4">
                        <h1 class="flex justify-center text-[36px] mb-4 text-slate-600">Add Tasks</h1>
                        <div class="flex flex-col ml-4 gap-5    ">
                            <label class="flex-none my-2 text-[28px] text-orange-500" htmlFor="tasks">Tasks:<br />
                                <input onChange={task} class="p-1 focus:outline-none bg-slate-200 rounded-lg text-blue-500  border-2 border-solid hover:border-amber-400  focus:border-amber-400 text-[20px] w-96" type="text" />
                            </label>

                            <label class="flex-none text-[25px] my-2  text-orange-500" htmlFor="imp"> Choose Importance: <br />
                                <select onChange={imp} class="p-1 text-[20px] bg-slate-200 text-blue-500" name="imp" id="">
                                    <option class="text-red-500" value="Yes">Important</option>
                                    <option class="text-green-500" value="No">Not Important</option>
                                </select>
                            </label>

                            <div class="flex justify-center gap-5  ">
                                <button onClick={add} class="flex-none border-2 border-green-400 bg-green-400 text-[25px] rounded-xl hover:bg-green-600  text-white h-9 w-20" type="button">Add</button>
                                <button onClick={toggle} class="flex-none text-[25px] bg-red-400 border-red-400 h-9 hover:bg-red-600 text-white rounded-xl w-20" type="button">Cancel</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}

export default Modal