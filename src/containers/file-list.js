import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { search } from '../actions/index';
// import { bindActionCreators } from 'redux';

// class FileList extends Component {
//     renderList() {
//         return this.props.files.result.map((file) => {
//             return (
//                 <li key={file.id} className="list-group-item">
//                     {file.title}
//                 </li>
//             );
//         });
//     }
//
//     render() {
//          console.log(this.props.files)
//         return (
//             <ul className="list-group col-sm-4">
//                 {this.renderList()}
//             </ul>
//         )
//     }
// }
//
//  Takes application state as an argument
//  state contains array of files, and active file
// function mapStateToProps(state) {
//      console.log(state)
//      console.log(this)
//      Return from here shows as props inside of FileList
//     return {
//         files: state.files
//     };
// }
//
// export default connect(mapStateToProps)(FileList);

class FileList extends Component {
  //  renderList() {
  //     return this.props.files.result.map((file) => {
  //         return (
  //             <li key={file.id} className="list-group-item">
  //                 {file.title}
  //             </li>
  //         );
  //     });
  // }

  // render() {
  //   const {files} = this.props.files;
  //   console.log({files});
  //
  //   return (
  //       console.log(this.props)
  //       <ul className="list-group col-sm-4">
  //           {/* {files.result.map((file) => <li key={file.id} className="list-group-item">{file.title}</li>)} */}
  //       </ul>
  //   );

  // render() {
  //     const files = this.props.files;
  //     console.log(files);
  //     return (
  //           <li key={file.id} className="list-group-item">
  //             {file.title}
  //           </li>
  //
  //     );
  // }

  render() {
    const {files} = this.props;
    return (
      <div>
          {files.map((file) => <li key={file.id} className="list-group-item">{file.title}</li> )}
      </div>
    );
  }
}

    // const files = this.props.files;
    // return (files.result.map((file) => {
    //   <li key={file.id} className="list-group-item">
    //     {file.title}
    //   </li>
    // });)
    // };


function mapStateToProps({files}) {
    console.log(files)
  return {files: files.result};
}

export default connect(mapStateToProps)(FileList);