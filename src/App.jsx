import { useState } from "react";
import { list } from "./data";
function App() {
  const [people, setPeople] = useState(list);

  const clearAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length}birthdays today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}years</p>
              </div>
            </article>
          );
        })}
        <button onClick={clearAll} className="btn">
          Delete All
        </button>
      </section>
    </main>
  );
}

export default App;
