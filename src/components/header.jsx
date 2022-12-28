import React, { useState } from "react";
import Modal from "./addUi";
import logo from '../assets/logo.png';

const Header = ({tasks, set}) => {

    const [visible, setVisible] = useState(false);

    return(
        <div className="flex flex-col items-center mt-2">
            <img class="w-52 flex-none"src={logo} alt="" />
            <button onClick={() => setVisible(true)}
            class="flex-none mt-10 text-2xl rounded-full border-solid border-2 bg-red-200 text-white hover:text-white  hover:bg-red-300  border-orange-300 w-36 h-10">
                Add Tasks
            </button>
            <Modal isVisible={visible} set={setVisible} tasks={tasks} dataSet={set} />
        </div>
    )
}

export default Header