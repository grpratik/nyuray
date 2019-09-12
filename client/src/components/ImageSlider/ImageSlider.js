import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import AdminSlider from './AdminSlider'
import ParentSlider from './ParentSlider'
import PrinicipalSlider from './PrinicipalSlider'
import TeacherSlider from './TeacherSlider'

import StudentSlider from './StudentSlider'


var fn = function() {

}

class ImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    console.log("The current directory is :" + process.cwd());
    return (
      <div>
        {/* <button onClick={this._handleClick.bind(this)}>Random</button> */}
        <Coverflow
          width={400}
          height={400}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          enableScroll={true}
          clickable={true}
          active={this.state.active}
          // media={{
          //   '@media (max-width: 100%)': {
          //     width: '100%',
          //     height: '100%'
          //   },
          //   '@media (min-width: 900px)': {
          //     width: '960px',
          //     height: '600px'
          //   }
          // }}
        >
           {/* <div
            onClick={() => fn()}
            onKeyDown={() => fn()}
            role="menuitem"
            tabIndex="-1000"
          >
          </div>  */}
          <AdminSlider/>
          <ParentSlider/>
          <PrinicipalSlider/>
          <TeacherSlider/>
          <StudentSlider/>
          
        </Coverflow>
      </div>
    );
  }

  // _handleClick() {
  //   var num = Math.floor((Math.random() * 10) + 1);
  //   this.setState({
  //     active: num
  //   });
  // }
};

export default ImageSlider;
// ReactDOM.render(
//   <Container></Container>,
//   document.querySelector('.example_4')
// );