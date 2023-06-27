import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'
function Latest(props) {

    // console.log("Props", props.props)
    const { data1, data2, data3 } = props.props;
    return (
        <div className="thelatest">
      

            <div className="frontPP">

                <img className="front" src={data2[17].urlToImage} alt="" />
                {/* <img className="front" src={data2[10].urlToImage} alt="Image Loading" /> */}
                <Link to={`/NPage/${data2[17].title}`} state={data2[17]}>
                    <h3 className="title">{data2[17].title}</h3>
                </Link>
                <p>{data2[10].content}</p>
                <p >{data2[10].publishedAt}</p>
            </div>

            <div className="frontPP">

                <img className="front" src={data2[10].urlToImage} alt="" />
                {/* <img className="front" src={data2[10].urlToImage} alt="Image Loading" /> */}
                <Link to={`/NPage/${data2[10].title}`} state={data2[10]}>
                    <h3 className="title">{data2[10].title}</h3>
                </Link>
                <p>{data1[10].content}</p>
                <p >{data1[10].publishedAt}</p>
            </div>
            <div className="frontPP">

                <img className="front" src={data3[61].urlToImage} alt="" />
                {/* <img className="front" src={data3[61].urlToImage} alt="Image Loading..." /> */}

                <Link to={`/NPage/${data3[61].title}`} state={data3[61]}>
                    <h3 className="title">{data3[61].title}</h3>
                </Link>
                <p>{data1[61].content}</p>
                <p >{data1[61].publishedAt}</p>

            </div>

        </div>

    )
}

export default Latest;