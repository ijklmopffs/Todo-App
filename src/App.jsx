import { useState } from "react";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [displayInput, setDisplayInput] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRemoveItem = (id) => {
    setListItems(listItems.filter((item) => item.id !== id));
  };

  const handleKeyPress = (event) => {
    if (
      event.key === "Enter" ||
      event.keyCode === 13 ||
      (event.keyCode === 176 && inputValue.trim() !== "")
    ) {
      const newItem = {
        id: Math.random(),
        task: inputValue,
        clean: "X",
      };
      setListItems((prevList) => [...prevList, newItem]);
      setInputValue("");
    }
  };

  return (
    <main className="flex items-center justify-center h-[90vh]">
      <section className="w-96">
        <div className="bg-purple-400 p-4 rounded-md my-4 text-white">
          <h1 className="text-xl">To-do Tasks</h1>
        </div>

        <div className="bg-white p-4 rounded-md">
          {listItems.length === 0 ? (
            <p className="text-lg">
              No tasks on list, click on the button to add a task
            </p>
          ) : (
            listItems.map((item) => (
              <div
                key={item.id}
                className="flex my-4 items-center justify-between"
              >
                <p className="text-lg">{item.task}</p>
                <button
                  className="text-xs"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  {item.clean}
                </button>
              </div>
            ))
          )}
        </div>

        <div className="my-5 flex flex-col gap-2 items-center">
          <input
            type="text"
            className={
              displayInput
                ? "w-full p-2 rounded-md focus:outline-none"
                : "hidden w-full p-2 rounded-md focus:outline-none"
            }
            value={inputValue}
            onChange={handleChange}
            placeholder="Add to-do..."
            onKeyPress={handleKeyPress}
          />

          <button
            onClick={() => setDisplayInput(true)}
            className="bg-purple-400 px-8 py-2 rounded-full text-white"
          >
            + New task
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
