import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function PanelPage() {
  const [pelicula, setPelicula] = useState([]);
  const [itemPage, setItemPage] = useState([]);
  const [loading, setLoading] = useState(null);

  const getList = async (page) => {
    setLoading(true); // Establecer estado de carga a true
    try {
      const options = {
        method: 'get',
        url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=es-MX&page=${page}&sort_by=popularity.desc`,
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODMzMTJkNGMzMDNiNTcxM2EzZGVkYjg1YjI2NTVkYyIsInN1YiI6IjY2MDgzYTRkNTkwMDg2MDE3Y2I5OGEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiCHM_e5u9ytODCIFJHyW-mq2cMTyP5Z3sIx4KzMuV4'
        }
      };

      const response = await axios.request(options); //enviando la peticion de tipo get
      setPelicula(response.data.results);// guardando los volares de tipo array en setPelicula para luego mostrarlo con variable Pelicula
      console.log(response)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Establecer estado de carga a false cuando la solicitud haya finalizado
    }
  };

  useEffect(() => {
    getList(1);
  }, []);

  useEffect(() => {
    let items = [];// creando array
    for (let i = 1; i <= 20; i++) {
      items.push(<Pagination.Item key={i} onClick={e => {
        getList(parseInt(e.target.text)); //envia el numero a la funcion para enviarlelo a la solicitud de la api
        window.scrollTo({ top: 0, behavior: 'smooth' }); //redirige hacia arriba cuando se le de click a un boton
      }}>{i}</Pagination.Item>);
    }
    setItemPage(items); //pasandole array al setItemPage
  }, []);

  return (
    <div className="panel">
      <h1 className='text-center mt-4 '>Listado de peliculas</h1>
      {loading ? ( // Mostrar pestaña de carga si loading es true
        <div>Cargando...</div>
      ) : (
        <div className='contenido row'>
          {pelicula.length > 0 && pelicula.map((movie, index) => (
          
          <div key={index} className='col  m-5 d-flex align-items-stretch   '>
          <Card  style={{ width: '28rem' }} className=" border-bottom border-primary">
              <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w500${movie.backdrop_path}`} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column">
                  <Card.Title className='text-center border-bottom border-primary mb-3'>{movie.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                      {movie.overview === '' ? 'Descripción no disponible' : movie.overview}
                  </Card.Text>
                  <div className='text-center'>
                      <Button variant="primary">VER MAS</Button>
                  </div>
              </Card.Body>
          </Card>
      </div>
          
          ))}



          <Pagination>
            <Pagination.Prev />
            {itemPage.map((item) => {
              return item;
            })}
            <Pagination.Next />
          </Pagination>
        </div>
      )  
      
      }
    </div>
  );
}

export default PanelPage;
