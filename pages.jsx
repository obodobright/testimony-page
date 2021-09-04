import React, { useState, Fragment } from "react";

const Pages = () => {
  const userData = [
    {
      timePosted: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      name: "Bright",
      id: 1,
      date: new Date().toLocaleDateString(),
      img: "https://avatars.githubusercontent.com/u/1?v=4",
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, architecto! amet consectetur adipisicing elit. Aliquid",
    },
    {
      timePosted: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      name: "Taheebat",
      id: 2,
      date: new Date().toLocaleDateString(),
      img: "https://avatars.githubusercontent.com/u/2?v=4",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis at ex libero provident alias a veniam esse! Aperiam, praesentium.",
    },

    {
      timePosted: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      name: "Tina",
      id: 3,
      date: new Date().toLocaleDateString(),
      img: "https://avatars.githubusercontent.com/u/4?v=4",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias fuga itaque! Excepturi, ratione? Possimus sapiente quidem voluptatibus quo",
    },
    {
      timePosted: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      name: "Timbuktu",
      id: 4,
      date: new Date().toLocaleDateString(),
      img: "https://avatars.githubusercontent.com/u/17?v=4",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestias fuga itaque! Excepturi, ratione? Possimus sapiente quidem voluptatibus ",
    },
  ];

  const [page, setPage] = useState(0);
  const [user, setUser] = useState(userData);

  const nextPage = () => {
    setPage((el) => el + 1);
  };

  const prevPage = () => {
    if (page < 1) {
      setPage(3);
    } else {
      setPage((el) => el - 1);
    }
  };

  const DeleteUser = (id) => {
    const del = user.filter((post) => post.id !== id);
    setUser(del);
  };
  const myUser = user.map((users) => (
    <div key={users.id}>
      <img src={users.img} alt={users.name} width="200px" style={{ borderRadius: "10em" }} />
      <div>
        <h1 className="m-4">{users.name}</h1>
        <p>{users.message}</p>
        <span className="m-2">{users.timePosted}</span>
        <span>{users.date}</span>
        <div>
          <i
            className="fa fa-times"
            onClick={() => DeleteUser(users.id)}
            style={{
              position: "relative",
              top: "-60vh",
              left: "16vw",
              fontSize: "30px",
              color: "white",
              cursor: "pointer",
            }}
          ></i>
        </div>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <section style={styleContainer}>
        <div style={styleUserContainer}>
            {user.length === 0 && <h3>No Post Available</h3>}
          {myUser[page % myUser.length]}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              top: "-35vh",
            }}
          >
            <i
              className="fa fa-angle-double-left"
              onClick={prevPage}
              style={{ marginLeft: "-0.5em", fontSize: "30px", color: "white", cursor: "pointer" }}
            ></i>

            <i
              className="fa fa-angle-double-right"
              onClick={nextPage}
              style={{ marginRight: "-0.5em", fontSize: "30px", color: "white", cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const styleContainer = {
  width: "100%",
  background: "whitesmoke",
  margin: "auto",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
};
const styleUserContainer = {
  background: "blue",
  padding: "1em 2em",
  width: "500px",
  height: "70vh",
  borderRadius: "0.5em",
};

export default Pages;
