import React , {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoriesBar from '../layout/CategoriesBar';
import Breadcrumb from '../layout/Breadcrumb';
import SectionTitle from '../layout/SectionTitle';

import { fetchUser } from '../../redux/reducers/authReducer';

class Profile extends Component {

    render() {
        const { user } = this.props;
        return(
            <div className='profile'>

                <CategoriesBar />
                <Breadcrumb page='Profile'/>

                <div className='container'>
                    <SectionTitle title={'Profile'}/>
                    <div className='profile-info'>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className='user-name mb-4'>
                                   <span className='orange-color'>Name: </span>
                                    <span>{user.name}</span>
                                </div>
                                <div className='user-email mb-4'>
                                    <span className='orange-color'>E-mail: </span>
                                    <span>{user.email}</span>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='user-avatar'>
                                    <div className='text-center'>
                                        <img
                                            className="rounded-circle img-fluid"
                                            src={this.props.user.avatar}
                                            alt={this.props.user.name}
                                            />
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        );    
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      { fetchUser}
    )(Profile)
  );