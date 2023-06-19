import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Latest from "./Latest";
import TPHome from "./TPHome";
import LArticle from "./LArticle";
import LStories from "./LStories";
import "./App.css";



function Home() {

  const params = useParams();

  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [loaded1, setLoaded1] = useState(false);
  const [loaded2, setLoaded2] = useState(false);
  const [loaded3, setLoaded3] = useState(false);


  console.log("UseParams returned : ", params);

  useEffect(() => {



    var url1 = "https://blogdata.onrender.com/bollywood";
    var url2 = "https://blogdata.onrender.com/food";
    var url3 = "https://blogdata.onrender.com/fitness";



    var req1 = new Request(url1);
    fetch(req1)
      .then((response) => {
        response.json().then((data1) => {
          setData1(data1);
          setLoaded1(true);
      
        });
      });

    var req2 = new Request(url2);
    fetch(req2)
      .then((response) => {
        response.json().then((data2) => {
          setData2(data2);
          setLoaded2(true);
        });
      });

    var req3 = new Request(url3);
    fetch(req3)
      .then((response) => {
        response.json().then((data3) => {
          setData3(data3);
          setLoaded3(true);
          console.log("DAta=3", data3);
        });
      });
  }, [params]);
  if (loaded1 && loaded2 && loaded3) {

    return (
      <>
        <h1 className="Hhead">Home</h1>
        <div className="TOPPOST">


          <div className="TOPLEFT">
            <img className="LEFTIMG" src={data1[10].urlToImage} alt="loading" />
            <Link to={`/NPage/${data1[10].title}`} state={data1[10]}>
              <h3 className="para1">{data1[10].title}</h3>
            </Link>
          </div>

          <div className="RIGHT">
            <div className="TOPRIGHT">
              <img className="RIGHTIMG" src={data1[1].urlToImage} alt="loading" />
              <Link to={`/NPage/${data1[1].title}`} state={data1[1]}>
                <p className="para2">{data1[1].title}</p>
              </Link>
            </div>

            <div className="BOTTOMRIGHT">
              <img className="RIGHTIMG1" src={data1[8].urlToImage} alt="load" />
              <Link to={`/NPage/${data1[8].title}`} state={data1[8]}>
                <p className="para3">{data1[8].title}</p>
              </Link>
            </div>
          </div>

        </div>
        <h1 className="main">The Latest</h1>
        {/* <hr className="Shortline"></hr> */}
        <Latest props={{ data1, data2, data3 }} />
        <div className="sk">
          <div>
            <h1 className="main"> Latest Articles </h1>
            {/* <hr className="Shortline" style={{ marginLeft: "0px" }} /> */}
          </div>
          <div className="hometop">

            <div style={{ display: "flex", flexDirection: "column" }}>
              <LArticle props={{ data1, data2, data3 }} />
              <img className="thumbnail1 single" src={data3[12].urlToImage} alt="load" />
              <img className="thumbnail1 single" src={data3[15].urlToImage} alt="load" />
            </div>
            <div >
              <TPHome props={{ data1, data2, data3 }} />
            </div>
          </div>
          <h1 style={{ paddingLeft: "10px", margin: "0px" }}>Latest Stories</h1>
          <hr className="Shortline"></hr>
          <LStories props={{ data1, data2, data3 }} />
        </div>
      </>
    );
  }

}
export default Home;