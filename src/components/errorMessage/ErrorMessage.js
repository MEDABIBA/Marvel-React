import img from './error.gif'

const ErrorMessage = ()=>{
    return (
        <div className='randomchar-block'>
            <img src={img} alt='error' style={{display: 'block'}}/>
        </div>
    

    )
}
export default ErrorMessage