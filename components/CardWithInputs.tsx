import React, { useState} from 'react';

interface CardWithInputsProps {
  onSubmit: (name: string, xCoord: string, yCoord: string) => void;
}

const CardWithInputs: React.FC<CardWithInputsProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [xCoord, setXCoord] = useState('');
  const [yCoord, setYCoord] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Aqui você pode fazer o que quiser com os dados dos inputs
    console.log('Name:', name);
    console.log('X Coord:', xCoord);
    console.log('Y Coord:', yCoord);

    try {
      // Cria a URL para a requisição com os valores dos inputs
      const url = `https://api.cold7.cc/api/colheita/${name}/${xCoord},${yCoord}`;

      // Limpar os campos após o submit
      setName('');
      setXCoord('');
      setYCoord('');

      // Chama a função onClick da prop para atualizar o estado no componente pai (Farm)
      onSubmit(name, xCoord, yCoord);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[89.5vh]">
      <div className="bg-gray-900 p-8 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Name and Land</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="xCoord">X Coord:</label>
            <input
              type="number"
              id="xCoord"
              value={xCoord}
              onChange={(e) => setXCoord(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="yCoord">Y Coord:</label>
            <input
              type="number"
              id="yCoord"
              value={yCoord}
              onChange={(e) => setYCoord(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full text-black"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardWithInputs;
