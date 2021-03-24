import React, { useState } from "react";
class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = { soLuongSinhVien: 1 };
    }
    render() {
        return (
            <div>
                Số lượng sinh viên: {this.state.soLuongSinhVien}
                <button
                    onClick={() => {
                        this.setState({
                            soLuongSinhVien:this.state.soLuongSinhVien + 1
                        })
                    }}
                >Tăng</button>
                <button
                onClick={
                    ()=>{
                        this.setState({
                            soLuongSinhVien:this.state.soLuongSinhVien-1
                        })
                    }
                }
                >
                    Giảm
                </button>
            </div>
        )
    }
}
// function Students() {
//     const [value, setValue] = useState(0);
//     const AddButton=({handleAddValue})={
//         return <button onClick{}></button>
//     } 
//     return (
//         <div>
//             Số lượng sinh viên: {value}
//             <button
//                 onClick={() => {
//                     this.setState({
//                         soLuongSinhVien: this.state.soLuongSinhVien + 1
//                     })
//                 }}
//             >Tăng</button>
//             <button
//                 onClick={
//                     () => {
//                         this.setState({
//                             soLuongSinhVien: this.state.soLuongSinhVien - 1
//                         })
//                     }
//                 }
//             >
//                 Giảm
//                         </button>
//         </div>
//     )
// }
export default Students;