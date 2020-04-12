import React,{Component} from 'react';



class FilterBox extends Component {

    constructor(props){
        super(props)

        this.range = React.createRef();
        this.max = React.createRef();

    }

    componentDidMount(){

        let slider = this.range.current;
        let max = this.max.current;

        slider.onmousemove = () => {
            max.innerText = '$'+slider.value;
        }
        slider.onclick = () => {
            max.innerText = '$'+slider.value;
        }

    }

    render(){

        return(

            <div className='filter-box'>
                <div>
                   <h5 className='orange-color mb-3'>Filter By Price:</h5>
                   <div className='price-filter mb-5 d-flex justify-content-between'>
                       <div className='pl-1 pr-1'>
                            <span className=''>$1</span>
                       </div>
                       <div className='pl-1 pr-1'>
                            <input type='range' className='form-control rounded-0' min='1' max='1000' defaultValue='1000' ref={this.range}/>
                       </div>
                       <div className='pl-1 pr-1'>
                            <span className='max-number' ref={this.max}>$1000</span>
                       </div>
                    </div> 
                </div>
                <div>
                    <h5 className='orange-color mb-3'>Filter By Brand:</h5>
                    <div className='brand-filter mb-5'>
                        <select className='form-control rounded-0'>
                            <option value='0'>All</option>
                            <option value='1'>Adidas</option>
                            <option value='2'>Nike</option>
                            <option value='3'>Prada</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h5 className='orange-color mb-3'>Filter By Gender:</h5>
                    <div className='gender-filter mb-5'>
                        <div>
                            <label htmlFor='all' className='w-50 default-color'>All:</label>
                            <input type='radio' className='' id='all' name='gender'/>
                        </div>
                        <div>
                            <label htmlFor='male' className='w-50 default-color'>Male:</label>
                            <input type='radio' className='' id='male' name='gender'/>
                        </div>
                        <div>
                            <label htmlFor='female' className='w-50 default-color'>Female:</label>
                            <input type='radio' className='' id='female' name='gender'/>
                        </div>
                    </div>
                </div>
            </div>

        );

    }

}

export default FilterBox


