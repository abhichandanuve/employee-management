import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface ProfileModalProps {
  closeModal: () => void;
  employeeId: string;
}

const EmployeeProfileModal: React.FC<ProfileModalProps> = ({
  closeModal,
  employeeId,
}) => {
  const employee = useSelector((state: RootState) =>
    state.employees.employees.find((e) => e.id === employeeId)
  );

  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h2 className="text-xl mb-4 font-bold">Employee Profile</h2>
        <p>
          <strong>Name:</strong> {employee.name}
        </p>
        <p>
          <strong>Position:</strong> {employee.position}
        </p>
        <p>
          <strong>Email:</strong> {employee.email}
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfileModal;
