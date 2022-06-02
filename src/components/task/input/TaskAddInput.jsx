import React from 'react'

export const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        // カードを追加する
        setTaskList([
            ...taskList,
            {
                text:inputText,
            },
        ]);
        setInputText("");
    };
    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="taskAddInput" type="text" placeholder="add a task" onChange={handleChange} value={inputText} />
            </form>
        </div>
    )
}
