import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task";

test("renders the task's text and category", () => {
  const task = { text: "Do laundry", category: "Home" };
  render(<Task task={task} onDeleteTask={() => {}} />);

  expect(screen.getByText("Do laundry")).toBeInTheDocument();
  expect(screen.getByText("Home")).toBeInTheDocument();
});

test("calls onDeleteTask when delete button is clicked", () => {
  const task = { text: "Do laundry", category: "Home" };
  const onDeleteTask = jest.fn();

  render(<Task task={task} onDeleteTask={onDeleteTask} />);
  fireEvent.click(screen.getByText("X"));

  expect(onDeleteTask).toHaveBeenCalledWith("Do laundry");
});
