import React,{Component} from 'react';
import SectionTitle from './SectionTitle';


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
       let categoryParam = document.querySelector('.filter-box form #category').value;
       let sizeParam = document.querySelector('.filter-box form #size').value;
       let filterParameters = {
           price : priceParam,
           category: categoryParam.toLowerCase(),
           brand : brandParam.toLowerCase(),
           size  : sizeParam.toLowerCase(),
       }

       this.props.filterParams(filterParameters);

    }


    render(){
        return(

            <div className='filter-box'>
                <form name='filterForm'onChange={this.handleFilterChange}>
                    <div>
                    <SectionTitle title='Filter By Price:' headerClass='smaller'/>
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
                        <SectionTitle title='Filter By Category:' headerClass='smaller'/>
                        <div className='category-filter mb-5'>
                            <select className='form-control rounded-0'id='category'>
                                <option value='all'>All</option>
                                <option value='men clothing'>Men Clothing</option>
                                <option value='Women Clothing'>Women Clothing</option>
                                <option value='phones & accessories'>Phones & Accessories</option>
                                <option value='computer & office'>Computer & Office</option>
                                <option value='consumer electronics'>Consumer Electronics</option>
                                <option value='jewlery & watches'>Jewlery & Watches</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <SectionTitle title='Filter By Brand:' headerClass='smaller'/> 
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
                        <SectionTitle title='Filter By Size:' headerClass='smaller'/>
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


