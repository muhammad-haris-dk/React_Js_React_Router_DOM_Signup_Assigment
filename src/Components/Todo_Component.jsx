import React, { useState } from "react";
import plus_Icon from "../assets/Svg_Logo/plus.svg";
import bin_Icon from "../assets/Svg_Logo/trash.svg";
import trash_Icon from "../assets/Svg_Logo/trash-solid.svg";
import pencil_Icon from "../assets/Svg_Logo/pencil-solid.svg";
const Todo_Component = (props) => {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [show_Details, setShowDetails] = useState([]);
  const [toggle, settoggle] = useState(false);
  const [edit, setEditTitle] = useState("");
  const [editdescription, setEditDescription] = useState("");
  const addItems = () => {
    if (data.trim() !== "" && data1.trim() !== "") {
      setShowDetails([...show_Details, { title: data, description: data1 }]);
      setData("");
      setData1("");
    }
  };
  const deleteItem = (id) => {
    const delete_Item = show_Details.filter((elem, ind) => {
      return ind !== id;
    });
    setShowDetails(delete_Item);
  };
  const delAllItems = () => {
    setShowDetails([]);
  };
  return (
    <div className="bg-transparent">
      <div className="bg-transparent">
        <div className="flex justify-center items-center p-5 mx-[50px] bg-transparent">
          <input
            id={props.id}
            placeholder={props.placeholder}
            type={props.type}
            value={data}
            className="border-2 rounded-lg focus:outline-yellow-500 focus:duration-300 focus:shadow-5xl focus:shadow-yellow-500 p-2 border-gray-500"
            onChange={(e) => setData(e.target.value)}
          />
          <input
            id={props.id}
            placeholder={props.description}
            type={props.type}
            value={data1}
            className="border-2 rounded-lg focus:outline-green-500 focus:shadow-5xl focus:duration-300 focus:shadow-green-500 p-2 border-gray-500"
            onChange={(t) => setData1(t.target.value)}
          />
          <button
            onClick={addItems}
            className="ms-2 py-2 px-3 border-2 border-black rounded-lg duration-500 bg-yellow-500 hover:bg-yellow-700"
          >
            <img src={plus_Icon} alt="" />
          </button>
          <button
            onClick={delAllItems}
            className="ms-2 py-2 px-3 border-2 border-black rounded-lg text-black hover:bg-red-800 duration-500 bg-red-600"
          >
            <img src={bin_Icon} alt="" />
          </button>
        </div>
        <div>
          <ul>
            {show_Details.map((todo, key) => {
              return (
                <li className="bg-white mx-16 rounded-lg flex  mt-2" key={key}>
                  <button
                    onClick={() => deleteItem(key)}
                    className="bg-red-600 duration-500 hover:text-black rounded-s-lg py-1 px-3 hover:bg-red-800"
                  >
                    <img className="" src={trash_Icon} alt="" />
                  </button>
                  <button
                    onClick={() => edititem(key)}
                    className="bg-green-600 duration-500 hover:text-black rounded-e-lg py-1 px-3 hover:bg-green-800"
                  >
                    <img className="" src={pencil_Icon} alt="" />
                  </button>
                  <h4 className="text-2xl ms-3 py-1">{todo.title}:</h4>

                  <h6 className="text-xl flex items-center">
                    {todo.description}
                  </h6>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Todo_Component };
