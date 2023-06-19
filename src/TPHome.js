import React from "react";
import { Link } from "react-router-dom";
import "./App.css";




function TPHome(props) {
  console.log("Props", props.props)
  const { data1, data2, data3 } = props.props;

  return (
    <div className="sectionTop1" >

      <div className="AD">Advertisement</div>

      <div className="ATop">
        
        <h1 className="topHome" style={{ textTransform: "capitalize" }}>Top Post</h1>
        <hr className="Shortline" />

        <div className="article" >
          <img className="front" src={data1[6].urlToImage} alt="" />
          {/* <img className="front" src={data1[4].urlToImage} alt="Image Loading..." /> */}

          <div className="text-content">
            <Link to={`/NPage/${data1[6].title}`} state={data1[6]}>
              <p className="title">{data1[6].title}</p>
            </Link>
            <p className="content">{data1[6].content}</p>
            <p className="published">{data1[6].publishedAt}</p>
          </div>
        </div>
        <div className="article" >
          <img className="front" src={data3[6].urlToImage} alt="" />
          {/* <img className="front" src={data3[4].urlToImage} alt="Image Loading..." /> */}

          <div className="text-content">
            <Link to={`/NPage/${data3[6].title}`} state={data1[6]}>

              <p className="title">{data3[6].title}</p>
            </Link>
            <p className="content">{data2[6].content}</p>
            <p className="published">{data1[6].publishedAt}</p>
          </div>
        </div>
        <div className="article" >
          <img className="front" src={data1[8].urlToImage} alt="" />
          {/* <img className="front" src={data1[8].urlToImage} alt="Image Loading..." /> */}

          <div className="text-content">
            <Link to={`/NPage/${data2[8].title}`} state={data2[8]}>
              <p className="title">{data2[8].title}</p>
            </Link>
            <p className="content">{data2[8].content}</p>
            <p className="published">{data2[8].publishedAt}</p>
          </div>
        </div>



      </div>


    </div>
  );

}
export default TPHome;