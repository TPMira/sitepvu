import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../components/Card';
import { ClipLoader } from 'react-spinners';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UserInfo from '@/components/UserInfo';
import CardInfo from '@/components/CardInfo';
import CardWithInputs from '@/components/CardWithInputs';
import Motion from '@/components/Motion';


interface SpotInfo {
  local: string;
  time: string;
  status: boolean;
  url_plant: string;
}

interface UserInfo {
  publicAddress: string;
  leAmount: number;
  numberOfLotteryTickets: number;
  numberOfSeeds: number;
  wateringTools: number;
  chaseCrowTools: number;
}




function Farm() {

  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoader = () => {
    setIsLoading(false)
    setTimeout(() =>  setShowContent(true), 450)
  }

  const spotsInfo = [
    { local: 'Spot 1', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 2', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 3', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 4', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 5', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 6', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 7', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 8', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 9', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 10', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 11', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 12', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 13', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 14', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 15', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 16', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 17', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 18', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 19', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 20', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 21', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 22', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 23', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 24', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 25', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 26', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 27', time: 'null', status: false, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
    { local: 'Spot 28', time: 'null', status: true, url: 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png' },
  ];

  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  // Estado para armazenar os resultados da colheita
  const [colheitaResults, setColheitaResults] = useState<SpotInfo[]>([]);

  // Estado para armazenar as coordenadas da terra
  const [coordenada, setCoordenada] = useState({ x: 0, y: 0 });

  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);
  const [isLoadingColheita, setIsLoadingColheita] = useState(true);

  const [showCardInputs, setShowCardInputs] = useState(true);

  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);


  {/*useEffect(() => {
    // Função para buscar informações do usuário
    const fetchUserInfo = async () => {
      try {
        // Faz a primeira requisição para obter as informações do usuário
        const responseUserInfo = await fetch('https://api.plantvsundead.com/users/userInfo', {
          headers: {
            'authority': 'api.plantvsundead.com',
            'accept': 'application/json, text/plain, ',
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
        const dataUserInfo = await responseUserInfo.json();
        setUserInfo(dataUserInfo.data);
        setIsLoadingUserInfo(false);
      } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
        setIsLoadingUserInfo(false);
      }
    };
  
    fetchUserInfo(); // Chama a função para buscar as informações do usuário
  
  }, []);*/}


  const handleToggleCardInputs = () => {
    setShowCardInputs((prev) => !prev);
  };

  const handleFormSubmit = async (name: string, xCoord: string, yCoord: string) => {
    console.log('Dados digitados:', name, xCoord, yCoord);

    let auth = ''; // Inicializa a variável do token de autorização

    // Verifica o usuário para definir o token de autorização
    if (name === 'mira') {
      auth = 'bearerHeader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg0ODQ3Y2QxNWRkM2EzNGU2NzUyMzQ1OTJjNjY1NGNjNDM4NDExNzM3IiwiaWF0IjoxNjg0ODYxNjYzfQ.Ew0HQXTmMI0H4QAUMH4HG_MQqpKVvwAxKYi04MUqr30';
    }
    if (name === 'th10') {
      auth = 'bearerHeader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHg1NTM1NTQwNzNiYTM5MjA3YTBhMmRlODNiZTRjMGQ0MzU5ZDUxZGU0IiwiaWF0IjoxNjg2MTk0OTAzfQ.5WAovbJbS_soQa-EdBwZTVuPXqIjipwbzcBqvEuwMO4';
    }
    if (name === 'shmervz') {
      auth = 'bearerHeader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHgyZWYxOTAzN2ExOTE5NzU4OGEyZTcwMWViNzlmYTc5MmZmMGVhZGYwIiwiaWF0IjoxNjg1MTEwNTMyfQ.LsC4T-b1I_1-yBcjj7yN9IoeXmT7gKOrvq4XbbAY9rc';
    }
    if (name === 'sakamoto') {
      auth = 'bearerHeader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhhMWY5NGUyMWM3N2I2NmYzYjcwMDI3MDM3YTEzZmZmNmFlMzNlZDA3IiwiaWF0IjoxNjg1NDA0NDA3fQ.AX_hgeSqiDBtNTgV2Pm6AZHJAjCiVWD5ochydUCcJnM';
    }
    if (name === 'chsdust') {
      auth = 'bearerHeader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNBZGRyZXNzIjoiMHhjZWRjNGEzMWQwNWNmM2ExM2Y1ODA3ZGY1ZGRjODlhNjEyOTNkYzU5IiwiaWF0IjoxNjg2MTgyNDgxfQ.Y4ukHdEGAnljKSR7NfrSg7odRf57Gx7OI4220xi3-jE';
    }

    try {
      setIsLoadingSubmit(true);
      // Faz a primeira requisição para obter as informações do usuário
      const responseUserInfo = await fetch('https://api.plantvsundead.com/users/userInfo', {
        headers: {
          'authority': 'api.plantvsundead.com',
          'accept': 'application/json, text/plain, */*',
          'accept-language': 'pt-BR,pt;q=0.5',
          'authorization': auth,
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
      const dataUserInfo = await responseUserInfo.json();
      setUserInfo(dataUserInfo.data);
      setIsLoadingUserInfo(false);
    } catch (error) {
      console.error('Erro ao obter informações do usuário:', error);
      setIsLoadingUserInfo(false);
    } finally {
      setIsLoadingSubmit(false); // Esconde o ClipLoader, independentemente do resultado da requisição
    }
  
    
  
    try {
      setIsLoadingSubmit(true);
      // Cria a URL para a requisição com os valores dos inputs
      const url = `https://api.cold7.cc/api/colheita/${name}/${xCoord},${yCoord}`;
  
      // Faz a requisição para o servidor
      const response = await fetch(url);
  
      // Verifica se a requisição foi bem-sucedida
      if (!response.ok) {
        throw new Error('Falha na requisição');
      }
  
      // Aqui você pode fazer o que quiser com a resposta da requisição
      const data = await response.json();
      console.log('Resposta:', data);
      setColheitaResults(data);
  
      // Atualiza as coordenadas
      if (data.length > 0) {
        setCoordenada({ x: data[0].land.split(',')[0], y: data[0].land.split(',')[1] });
      }
  
      // Indica que os dados foram carregados
      setIsLoadingColheita(false);
      handleToggleCardInputs();
    } catch (error) {
      console.error('Erro na requisição:', error);
  
      // Indica que ocorreu um erro no carregamento
      setIsLoadingColheita(false);
    } finally {
      setIsLoadingSubmit(false); // Esconde o ClipLoader, independentemente do resultado da requisição
    }
  
  };

  {/*useEffect(() => {  
    // Função para buscar resultados da colheita
    const fetchColheitaResults = async (name, xCoord, yCoord) => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/api/colheita/${name}/${xCoord},${yCoord}`);
        const data = await response.json();
        setColheitaResults(data);
        if (data.length > 0) {
          // Define as coordenadas com base nos resultados da API (primeira entrada)
          setCoordenada({ x: data[0].land.split(',')[0], y: data[0].land.split(',')[1] });
        }
        setIsLoadingColheita(false); // Indica que os dados foram carregados
      } catch (error) {
        console.error('Error fetching colheita data:', error);
        setIsLoadingColheita(false); // Indica que ocorreu um erro no carregamento
      }
    };

    // Faz a solicitação para a API de colheita assim que o componente for montado
    fetchColheitaResults();
  }, []);*/}

   
  

  // Função para atualizar as informações do spot com os resultados da colheita
  const updateSpotsInfo = () => {
    const updatedSpotsInfo = spotsInfo.map((spot, index) => {
      const colheitaResult = colheitaResults[index];
      if (colheitaResult) {
        return {
          local: `Spot ${colheitaResult.local}`,
          time: colheitaResult.status ? 'Colheita com sucesso' : `${colheitaResult.time} até a colheita`,
          status: colheitaResult.status,
          url: colheitaResult.url_plant,
        };
      } else {
        return spot;
      }
    });
    
    return updatedSpotsInfo;
  };
  

  const spotsInfoUpdated = updateSpotsInfo();

  return (

    <div>

      { 
        showContent && (

          <div>
            <NavBar/>
        
            <div className="flex flex-col justify-center items-center min-h bg-gradient-to-t from-gray-600 via-gray-700 to-gray-800 h-[97.5vh]">
              <div className='mt-4 text-center'>
                {isLoadingSubmit ? (
                  <div className="flex justify-center items-center flex-col h-[89.5vh]">
                    <p className="mb-2 text-yellow-300">Carregando dados</p>
                    <ClipLoader size={35} color={'#3B82F6'} loading={isLoadingSubmit} />
                  </div>
                ) : showCardInputs ? (
                  <div>
                    <CardWithInputs onSubmit={handleFormSubmit}/>            
                  </div>
                ): (
                  <div>
                    {userInfo ? (
                      <UserInfo userInfo={userInfo} />
                    ) : (
                      <ClipLoader size={35} color={'#3B82F6'} loading={isLoadingUserInfo} />
                    )}

                    {isLoadingColheita ? (
                      // Se estiver carregando, exiba uma mensagem de carregamento
                      <div className="flex justify-center items-center h-[90vh]">
                        <ClipLoader size={35} color={'#3B82F6'} loading={isLoadingColheita} />
                      </div>
                    ) : colheitaResults.length === 0 ? (
                      // Se não houver resultados da colheita, exiba uma mensagem de que não há dados
                      <div className="flex justify-center items-center h-[80vh]">
                        <p className='text-yellow-300'>Não há dados disponíveis.</p>
                      </div>
                    ) : (
                      // Se tiver resultados da colheita, exiba os cards dos spots
                      <div>
                        <CardInfo coordenada={coordenada} spotsInfoUpdated={spotsInfoUpdated} />
                      </div>
                    )}
                
                  </div>
                )}
              </div>
            </div>
            <Footer/>
          </div>
        )
      }
      <Motion isLoading={isLoading} setIsLoading={handleLoader}/>

    </div>
  );
}  

export default Farm;
