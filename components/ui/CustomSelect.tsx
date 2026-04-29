'use client';

import { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = 'Select an option...',
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  const handleSelect = (optionValue: string) => {
    // Trigger the hidden select's change event
    if (selectRef.current) {
      selectRef.current.value = optionValue;
      const event = new Event('change', { bubbles: true });
      selectRef.current.dispatchEvent(event);
    }
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      {/* Hidden native select for form validation */}
      <select
        ref={selectRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="sr-only"
        tabIndex={-1}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Custom styled button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-5 py-4 rounded-xl border-2 transition-all cursor-pointer text-left
          ${value 
            ? 'text-zen-900 dark:text-zen-50' 
            : 'text-zen-400 dark:text-zen-600'
          }
          ${isOpen
            ? 'border-accent-500 ring-2 ring-accent-500 bg-zen-50 dark:bg-zen-900'
            : 'border-zen-200 dark:border-zen-700 bg-zen-50 dark:bg-zen-900 hover:border-zen-300 dark:hover:border-zen-600'
          }
        `}
      >
        <span className="flex items-center justify-between">
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <FiChevronDown 
            className={`h-5 w-5 text-zen-600 dark:text-zen-400 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </span>
      </button>

      {/* Custom dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 rounded-xl border-2 border-zen-200 dark:border-zen-700 bg-white/95 dark:bg-zen-800/95 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="py-2 max-h-64 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`
                  w-full px-5 py-3 text-left transition-colors
                  ${value === option.value
                    ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400 font-medium'
                    : 'text-zen-900 dark:text-zen-50 hover:bg-zen-100 dark:hover:bg-zen-700/50'
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
