import React, { useState, useEffect } from 'react';

type PesquisaUserProps = {
  onSearch: () => void;
};

interface UserInfo {
  publicAddress: string;
  leAmount: number;
  numberOfLotteryTickets: number;
  numberOfSeeds: number;
  wateringTools: number;
  chaseCrowTools: number;
}

interface SpotInfo {
  local: string;
  time: string;
  status: boolean;
  url_plant: string;
}

const PesquisaUser = ({ onSearch }: PesquisaUserProps) => {

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [user, setUser] = useState('');
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);
  const [isLoadingColheita, setIsLoadingColheita] = useState(true);
  const [colheitaResults, setColheitaResults] = useState<SpotInfo[]>([]);
  const [coordenada, setCoordenada] = useState({ x: 0, y: 0 });
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Função para buscar informações do usuário
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('https://api.plantvsundead.com/users/userInfo', {
          headers: {
            'authority': 'api.plantvsundead.com',
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'pt-BR,pt;q=0.5',
            'authorization': 'bearerHeader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg0ODQ3Y2QxNWRkM2EzNGU2NzUyMzQ1OTJjNjY1NGNjNDM4NDExNzM3IiwiaWF0IjoxNjg0ODYxNjYzfQ.Ew0HQXTmMI0H4QAUMH4HG_MQqpKVvwAxKYi04MUqr30',  
            'if-none-match': 'W/"180-axSII21fivckcyUy2z6p0sb1bjM"',
            'origin': 'https://marketplace.plantvsundead.com',
            'referer': 'https://marketplace.plantvsundead.com/',
            'sec-ch-ua': '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-site',
            'sec-gpc': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
          }
        });
        const data = await response.json();
        setUserInfo(data.data);
        setIsLoadingUserInfo(false);
      } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
        setIsLoadingUserInfo(false);
      }
    };
    fetchUserInfo();
  }, []);

  useEffect(() => {  
    // Função para buscar resultados da colheita
    const searchColheitaResults = async () => {
      try {
        setIsLoadingColheita(true);
  
        const response = await fetch(`http://127.0.0.1:8080/api/colheita/${user}/${x},${y}`);
        const data = await response.json();
        setColheitaResults(data);
        if (data.length > 0) {
          setCoordenada({ x: data[0].land.split(',')[0], y: data[0].land.split(',')[1] });
        }
    
        setIsLoadingColheita(false);
        setShowResults(true);
      } catch (error) {
        console.error('Error fetching colheita data:', error);
        setIsLoadingColheita(false);
      }
    };

    // Faz a solicitação para a API de colheita assim que o componente for montado
    if (user && x && y) {
      searchColheitaResults();
    }
  }, [user, x, y]);

  const handleSearch = () => {
    // Construindo a URL com base nos inputs fornecidos
    const url = `http://127.0.0.1:8080/api/colheita/${user}/${x},${y}`;

    // Fazer o fetch na API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Aqui você pode fazer o que quiser com os dados obtidos
        console.log(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os resultados:', error);
      });
      onSearch();
  };

  return (
    <div className=''>
      <input
        className='bg-gray-800'
        type="text"
        placeholder="Digite o usuário"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        className='bg-gray-800'
        type="number"
        placeholder="Digite o valor de x"
        value={x}
        onChange={(e) => setX(e.target.value)}
      />
      <input
        className='bg-gray-800'
        type="number"
        placeholder="Digite o valor de y"
        value={y}
        onChange={(e) => setY(e.target.value)}
      />

      <div className='flex items-center justify-center pt-6'>
        {/* Botão para buscar os resultados da colheita */}
        <button onClick={handleSearch}>Buscar Resultados</button>
      </div>
      
    </div>
  );
};

export default PesquisaUser;
