import React, { useState } from 'react'
import { TaskCard } from "./TaskCard"
import { AddTaskCardButton } from "./button/AddTaskCardButton"

export const TaskCards = () => {
    const [taskCardsList, setTaskCardsList] = useState([]);
    return (
        <div className="taskCardsArea">
            {taskCardsList.map((taskCardList) => (
                <TaskCard key={taskCardList.id}/>
            ))}
            <AddTaskCardButton
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
            />
        </div>
    )
}
