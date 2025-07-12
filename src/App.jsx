import React, { useState } from 'react';
    import PlantGenerator from './components/PlantGenerator';
    import TerrariumView from './components/TerrariumView';
    import ParameterControls from './components/ParameterControls';

    function App() {
      const [plant, setPlant] = useState(null);

      const generatePlant = (params) => {
        const newPlant = PlantGenerator.generate(params);
        setPlant(newPlant);
      };

      return (
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4">Procedural Botany</h1>
          <ParameterControls onGenerate={generatePlant} />
          {plant && <TerrariumView plant={plant} />}
        </div>
      );
    }

    export default App;
