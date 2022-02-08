import {fireEvent, render, screen} from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodos = jest.fn()

describe("AddInput", () => {
    it('Should render input element', async () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodos}
        />);
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it('Should be able to type into input', async () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodos}
        />);
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
        fireEvent.change(inputElement, {target: {value: "go shopping"}})
        expect(inputElement.value).toBe("go shopping");
    });

    it('Should have empty input when add button is clicked', async () => {
        render(<AddInput
            todos={[]}
            setTodos={mockedSetTodos}
        />);
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
        const buttonElement = screen.getByRole("button");

        fireEvent.change(inputElement, {target: {value: "go shopping"}})
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    });
});
