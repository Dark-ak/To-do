import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/header';
import Tasks from './components/tasks';
import api from "./services/api"

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api
        .getAll()
        .then(response => {
            setTasks(response)
        })
    }, [])


    return (
        <div>
            <Header tasks={tasks} set={setTasks} />
            <div class="grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1   mt-10 ml-5 mr-5 gap-4 ">
                <Tasks data={tasks} set={setTasks} />
            </div>
        </div>
    )
}

export default App
