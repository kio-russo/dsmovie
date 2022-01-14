import FromCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function From() {

    const params = useParams();

    return (
        <FromCard movieId={`${params.movieId}`} />
    );
}

export default From;
