import {fireEvent, render, screen} from '@testing-library/react';
import Todo from '../Todo';
import {BrowserRouter} from "react-router-dom";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo/>
        </BrowserRouter>
    )
}

const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", {name: /Add/i})
    tasks.forEach((task) => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement);
    })

}

describe("Todo", () => {
    it('renders render same text passed into title prop', async () => {
        render(<MockTodo />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", {name: /Add/i})
        fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
        fireEvent.click(buttonElement);
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        expect(divElement).toBeInTheDocument();
    });

    it('should render 3 tasks when adding them via input', async () => {
        render(<MockTodo />);
        addTasks(["Go Grocery Shoppin 1", "Go Grocery Shopping 2", "Go Grocery Shopping 3"])
        const divElements = screen.getAllByTestId("task-container")
        expect(divElements.length).toBe(3);
    });

    it('task should not have completed class when initially rendered ', async () => {
        render(<MockTodo />);
        addTasks(["Go Grocery Shopping 1"])
        const divElement = screen.getByText(/Go Grocery Shopping 1/i)
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('task should have completed class when initially rendered ', async () => {
        render(<MockTodo />);
        addTasks(["Go Grocery Shopping 1"])
        const divElement = screen.getByText(/Go Grocery Shopping 1/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active");
    });
})
