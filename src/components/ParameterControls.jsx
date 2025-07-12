import React, { useState } from 'react';

    function ParameterControls({ onGenerate }) {
      const [params, setParams] = useState({
        iterations: 5,
        angle: 25,
        branchLength: 10,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setParams((prevParams) => ({
          ...prevParams,
          [name]: value,
        }));
      };

      const handleGenerate = () => {
        onGenerate(params);
      };

      return (
        <div className="mb-4">
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Iterations</label>
            <input
              type="number"
              name="iterations"
              value={params.iterations}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Angle</label>
            <input
              type="number"
              name="angle"
              value={params.angle}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700">Branch Length</label>
            <input
              type="number"
              name="branchLength"
              value={params.branchLength}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={handleGenerate}
            className="mt-2 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Plant
          </button>
        </div>
      );
    }

    export default ParameterControls;
