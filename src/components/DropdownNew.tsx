// DropdownNew.tsx
import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Sidebar.css';
import '../UserView.css';

interface Option {
  title: string;
  path: string;
}

interface DropdownProps {
  options: Option[];
  onChange: (path: string) => void;
}

const DropdownNew: React.FC<DropdownProps> = ({ options, onChange }) => {
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const path = event.target.value;
    onChange(path);
    navigate(path);
  };

  return (
    <div className="dropdown-container-User">
      <select onChange={handleChange} className="dropdown" defaultValue="">
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.path}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownNew;
