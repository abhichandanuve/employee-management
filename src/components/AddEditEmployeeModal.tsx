import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  updateEmployee,
} from "../features/employees/employeeSlice";
import { RootState } from "../app/store";
import { v4 as uuidv4 } from "uuid";

interface ModalProps {
  closeModal: () => void;
  editingEmployeeId: string | null;
}

const AddEditEmployeeModal: React.FC<ModalProps> = ({
  closeModal,
  editingEmployeeId,
}) => {
  const dispatch = useDispatch();
  const employee = useSelector((state: RootState) =>
    state.employees.employees.find((e) => e.id === editingEmployeeId)
  );

  const [name, setName] = useState(employee?.name || "");
  const [position, setPosition] = useState(employee?.position || "");
  const [email, setEmail] = useState(employee?.email || "");

  const handleSave = () => {
    if (editingEmployeeId) {
      dispatch(
        updateEmployee({ id: editingEmployeeId, name, position, email })
      );
    } else {
      dispatch(addEmployee({ id: uuidv4(), name, position, email }));
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4">
          {editingEmployeeId ? "Edit Employee" : "Add Employee"}
        </h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-2 p-2 border"
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full mb-2 p-2 border"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={closeModal}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditEmployeeModal;
