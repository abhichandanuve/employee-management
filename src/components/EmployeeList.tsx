import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { deleteEmployee } from "../features/employees/employeeSlice";
import AddEditEmployeeModal from "./AddEditEmployeeModal";
import EmployeeProfileModal from "./EmployeeProfileModal";

const EmployeeList = () => {
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );
  const dispatch = useDispatch();
  const [editingEmployee, setEditingEmployee] = useState<string | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleDelete = (id: string) => {
    dispatch(deleteEmployee(id));
  };

  const handleEdit = (id: string) => {
    setEditingEmployee(id);
    setShowEditModal(true);
  };

  const handleAdd = () => {
    setEditingEmployee(null);
    setShowEditModal(true);
  };

  const handleViewProfile = (id: string) => {
    setSelectedEmployee(id);
    setShowProfileModal(true);
  };

  return (
    <div className="container mx-auto p-20">
      <h1 className="text-2xl mb-4">Employee List</h1>
      <button
        className="mb-10 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={handleAdd}
      >
        Add Employee
      </button>
      <ul className="space-y-4">
        {employees.map((employee) => (
          <li
            key={employee.id}
            className="cursor-pointer bg-white p-4 shadow-md flex justify-between items-center hover:shadow-lg transition-shadow duration-300 rounded-lg transform hover:scale-105"
          >
            <div
              className="w-[60%]"
              onClick={() => handleViewProfile(employee.id)}
            >
              <h2 className="text-xl font-bold text-blue-600 cursor-pointer hover:underline">
                {employee.name}
              </h2>
              <p>{employee.position}</p>
              <p>{employee.email}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(employee.id)}
                className="text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(employee.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showEditModal && (
        <AddEditEmployeeModal
          closeModal={() => setShowEditModal(false)}
          editingEmployeeId={editingEmployee}
        />
      )}
      {showProfileModal && selectedEmployee && (
        <EmployeeProfileModal
          closeModal={() => setShowProfileModal(false)}
          employeeId={selectedEmployee}
        />
      )}
    </div>
  );
};

export default EmployeeList;
