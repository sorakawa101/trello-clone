import React from 'react'

export const TaskAddInput = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="taskAddInput" type="text" placeholder="add a task" />
            </form>
        </div>
    )
}
