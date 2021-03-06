import React from 'react'
import { v4 as uuid } from "uuid"

export const AddTaskCardButton = (props) => {
    const { taskCardsList, setTaskCardsList } = props;

    const addTaskCard = () => {
        const taskCardId = uuid();
        // タスクカードを追加する
        setTaskCardsList([
            ...taskCardsList,
            {
            id: taskCardId,
            draggableId: `item${taskCardId}`
            },
        ]);
    };

    return (
        <div>
            <div className="addTaskCardButtonArea">
                <button className="addTaskCardButton" onClick={addTaskCard}>+</button>
            </div>
        </div>
    )
}
