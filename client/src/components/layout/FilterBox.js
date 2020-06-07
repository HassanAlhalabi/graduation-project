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
                   <h5 className='default-color'>Filter By Price:</h5>
                   <div className='price-filter mb-5 d-flex'>
                       <div className='d-flex pl-1 pr-1'>
                            <span className=''>$1</span>
                       </div>
                       <div className='pl-1 pr-1'>
                            <input type='range' className='form-control' min='1' max='1000' ref={this.range}/>
                       </div>
                       <div className='d-flex pl-1 pr-1'>
                            <span className='max-number' ref={this.max}>$1000</span>
                       </div>
                    </div> 
                </div>
                <div>
                    <h5 className='default-color'>Filter By Brand:</h5>
                    <div className='brand-filter mb-5'>
                        <select className='form-control'>
                            <option value='1'>Filter1</option>
                            <option value='2'>Filter2</option>
                            <option value='3'>Filter3</option>
                        </select>
                    </div>
                </div>
                <div>
                    <h5 className='default-color'>Filter By Gender:</h5>
                    <div className='gender-filter mb-5'>
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


