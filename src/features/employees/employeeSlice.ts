import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  id: string;
  name: string;
  position: string;
  email: string;
}

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: [
    {
      id: "1",
      name: "John Doe",
      position: "Manager",
      email: "john@example.com",
    },
    {
      id: "2",
      name: "Jane Smith",
      position: "Engineer",
      email: "jane@example.com",
    },
    {
      id: "3",
      name: "Mark Brown",
      position: "Designer",
      email: "mark@example.com",
    },
    {
      id: "4",
      name: "Alice Green",
      position: "HR",
      email: "alice@example.com",
    },
    {
      id: "5",
      name: "Steve White",
      position: "Developer",
      email: "steve@example.com",
    },
    {
      id: "6",
      name: "Rachel Black",
      position: "Tester",
      email: "rachel@example.com",
    },
    {
      id: "7",
      name: "David Yellow",
      position: "Marketing",
      email: "david@example.com",
    },
    {
      id: "8",
      name: "Laura Blue",
      position: "Support",
      email: "laura@example.com",
    },
    {
      id: "9",
      name: "James Red",
      position: "Sales",
      email: "james@example.com",
    },
    {
      id: "10",
      name: "Sophia Orange",
      position: "Finance",
      email: "sophia@example.com",
    },
  ],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
    updateEmployee: (state, action: PayloadAction<Employee>) => {
      const index = state.employees.findIndex(
        (e) => e.id === action.payload.id
      );
      if (index >= 0) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter((e) => e.id !== action.payload);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
