import React,{Component} from 'react';



class FilterBox extends Component {

    constructor(props){
        super(props)

        this.range = React.createRef();
        this.max = React.createRef();

    }

    componentDidMount(){

        // Handle price slider
        let slider = this.range.current;
        let max = this.max.current;
        slider.onmousemove = () => {
            max.innerText = '$'+slider.value;
        }
        slider.onclick = () => {
            max.innerText = '$'+slider.value;
        }
    }

    handleFilterChange = () => {
       let priceParam = document.querySelector('.filter-box form input#range').value;
       let brandParam = document.querySelector('.filter-box form #brand').value;
       let sizeParam = document.querySelector('.filter-box form #size').value;
       let filterParameters = {
           price : priceParam,
           brand : brandParam,
           size  : sizeParam,
       }
       this.props.filterParams(filterParameters)
    }

    render(){
        return(

            <div className='filter-box'>
                <form name='filterForm'onChange={this.handleFilterChange}>
                    <div>
                    <h5 className='orange-color mb-3'>Filter By Price:</h5>
                    <div className='price-filter mb-5 d-flex justify-content-between'>
                        <div className='pl-1 pr-1'>
                                <span className=''>$1</span>
                        </div>
                        <div className='pl-1 pr-1'>
                                <input 
                                    type='range' 
                                    className='form-control rounded-0' 
                                    min='1' 
                                    max='1000' 
                                    defaultValue='1000' 
                                    ref={this.range}
                                    id='range'/>
                        </div>
                        <div className='pl-1 pr-1'>
                                <span className='max-number' ref={this.max}>$1000</span>
                        </div>
                        </div> 
                    </div>
                    <div>
                        <h5 className='orange-color mb-3'>Filter By Brand:</h5>
                        <div className='brand-filter mb-5'>
                            <select className='form-control rounded-0'id='brand'>
                                <option value='all'>All</option>
                                <option value='adidas'>Adidas</option>
                                <option value='nike'>Nike</option>
                                <option value='prada'>Prada</option>
                                <option value='samsung'>Samsung</option>
                                <option value='apple'>Apple</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h5 className='orange-color mb-3'>Filter By Size:</h5>
                        <div className='brand-filter mb-5'>
                            <select className='form-control rounded-0'id='size'>
                                <option value='all'>All</option>
                                <option value='sm'>SM</option>
                                <option value='md'>MD</option>
                                <option value='lg'>LG</option>
                                <option value='xl'>XL</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>

        );

    }

}

export default FilterBox


