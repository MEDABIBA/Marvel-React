import Skeleton from 'react-loading-skeleton'

import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import dataChar from '../components/types/marvel';

const setContent = (process: 'loading' | 'error' | 'waiting' | 'succes',  Component: React.ComponentType<{data: dataChar}>, data: dataChar | null): JSX.Element => {
    switch(process){
        case 'loading':
            return <Spinner/>;
        case 'error':
            return <ErrorMessage/>;
        case 'waiting':
            return <Skeleton count={5}/>;
        case 'succes':
            return data ? <Component data={data}/> : <ErrorMessage/>
            default:
                throw new Error('Unexpected process state')
        
    }
}
export default setContent