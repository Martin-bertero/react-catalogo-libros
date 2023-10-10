
import { useState } from "react";
import { Link } from "react-router-dom";
import FormularioAgregarLibro from "./FormularioAgregarLibro";



    const ListaLibros = ({libros}) => {
    const [categoria, setcategoria] = useState("");

    const [ListaLibros, setListaLibros] = useState(libros);

    const agregarLibro = (nuevoLibro) => {
        setListaLibros([...ListaLibros, nuevoLibro]);
    };

    const librosFiltrados = ListaLibros.filter(
        (libro) => libro.categoria === categoria || !categoria);

    return (
        <>
        <h1>Formulario Nuevo Libro</h1>
        <FormularioAgregarLibro agregarLibro={agregarLibro}/>
        <h1>Mini Catlogo de Libros</h1>
        <label>Categoria: </label>
        <select onChange={(e) => setcategoria(e.target.value)}>
            <option key="0" value="">Todos</option>
            <option key="1" value="Misterio">Misterio</option>
            <option key="2" value="Ficción">Ficción</option>
              
        </select>
        <div className="book-grid">
            { librosFiltrados.map((libro)=>(
                    <div key={libro.id} className="book-card">
                        <div className="book-title">{libro.titulo}</div>
                        <div>{libro.descripcion}</div>
                        <div>{libro.autor}</div>
                        <div>{libro.categoria}</div>
                        <div>{libro.precio}</div>
                        <Link to={`/libro/${libro.id}`}>Ver mas</Link>



                    </div>

                ))
            }
        </div>
         </>
    )
}

export default ListaLibros;