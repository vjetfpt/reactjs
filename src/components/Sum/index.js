import React from "react";
import PropTypes from 'prop-types';
function Sum({data}){
    const a=data.a;
    const b=data.b
    return (
        <div>
          <h1>{a}+{b}={a+b}</h1>
        </div>
      );
}
//Kiểm tra dữ liệu sử dụng PropTypes.
Sum.propTypes = {
  data: PropTypes.objectOf(PropTypes.number)
}
export default Sum;