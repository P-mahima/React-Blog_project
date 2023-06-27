import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { CircularProgress } from '@mui/material';
import "./App.css";

function TPost() {

  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const [count] = useState(4);
  console.log("UseParams returned : ", params);
  const date = new Date();
  const dateString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
  console.log(dateString);
  useEffect(() => {

    var url = "https://blogdata.onrender.com/" + params.category;
    var req = new Request(url);

    fetch(req)
      .then((response) => {
        response.json().then((data) => {
          setData(data);
          setLoaded(true);
          console.log(data);
        });
      });
  }, [params]);
  if (loaded) {
    return (
      <div className="sectionTop" >
        <div className="ATop">
          <h1 className="Toppostheading" >Top Post</h1>
          <div className="reversed">

          {data.map((cartoon, index) => {
            
            if (index < count) {
              return (
                <div className="article" key={index}>
                  <img className="front" src={cartoon.urlToImage} alt="" />
            

                  <div className="text-content">
                  <Link to={`/NPage/${cartoon.title}`} state={cartoon}>

                  <p className="title">{cartoon.title}</p>
                  </Link>
                    {/* <Link to={`/NewPage/${cartoon.title}`} state={ cartoon }>
                      <p className="title">{cartoon.title}</p>
                    </Link> */}
                    <p className="content">{cartoon.content}</p>
                    <p className="published">{cartoon.publishedAt}</p>
                  </div>
                </div>
              );
            }
          })}
          </div>
        </div>

        <div className="AD">Advertisement</div>
      </div>
    );
  }
//   else {
//     return <div className="Loding"><CircularProgress /></div>;
//   }
}
export default TPost;