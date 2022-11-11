import './styles.css';

export const LayoutComponents = (props) => {
    return(
        <div className= "container" >
            <div className='container-content'>
                <div className='wrap-content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}