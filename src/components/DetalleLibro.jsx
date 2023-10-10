import { useParams } from "react-router-dom";

const DetalleLibro = ({ libros }) => {
    const { id } = useParams();
    const libro = libros.find(l => l.id === parseInt(id));

    // Verificar si libro es undefined antes de acceder a sus propiedades
    if (!libro) {
        return <p>Libro no encontrado</p>;
    }

    return (
        <div>
            <h2>{libro.titulo}</h2>
            <p>{libro.descripcion}</p>
            <p>Autor: {libro.autor}</p> 
            <p>Categoria: {libro.categoria}</p>
            <p>Precio: {libro.precio}</p>
        </div>
    );
};

export default DetalleLibro;
