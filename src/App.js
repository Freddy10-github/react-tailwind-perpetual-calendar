import { useEffect, useState, useRef } from "react";

function App() {
  const [current, setCurrent] = useState(new Date());
  const date = new Date(current.getFullYear(), current.getMonth(), 1);
  let isReRender = useRef(0);

  useEffect(() => {
    console.log(current);
    const daysContainer = document.querySelector("#days");
    let str = "";
    date.setDate(date.getDate() - date.getDay());
    while (current.getMonth() >= date.getMonth()) {
      if (current.getMonth() > date.getMonth())
        str += `<li class="w-8 center text-center opacity-50">${date.getDate()}</li>`;
      else if (
        current.getDate() === date.getDate() &&
        current.getMonth() === date.getMonth()
      )
        str += `<li class="w-8 center text-center border">${date.getDate()}</li>`;
      else str += `<li class="w-8 center text-center">${date.getDate()}</li>`;
      date.setDate(date.getDate() + 1);
    }
    while (date.getDay() !== 0) {
      str += `<li class="w-8 center text-center opacity-50">${date.getDate()}</li>`;
      date.setDate(date.getDate() + 1);
    }
    daysContainer.innerHTML = str;
  }, [current]);
  useEffect(() => {
    if (isReRender.current > 0) return;
    const yearsSelect = document.querySelector("#years");
    for (
      let i = new Date().getFullYear() - 20;
      i < new Date().getFullYear() + 20;
      i += 1
    ) {
      if (i === new Date().getFullYear())
        yearsSelect.add(new Option(i, i, 0, 1));
      else yearsSelect.add(new Option(i, i));
    }

    const daysSelect = document.querySelector("#months");
    for (let i = 0; i < 12; i += 1) {
      if (i === new Date().getMonth())
        daysSelect.add(new Option(i + 1, i, 0, 1));
      else daysSelect.add(new Option(i + 1, i));
    }
    isReRender.current += 1;
  });
  return (
    <div className="App">
      <h1 className="text-red-700">
        <select
          name="years"
          id="years"
          onChange={(e) => {
            const date = new Date(e.target.value, current.getMonth());
            // console.log(date)
            setCurrent(date);
            // console.log(current)
          }}
        ></select>{" "}
        /
        <select
          name="months"
          id="months"
          onChange={(e) => {
            const date = new Date(current.getFullYear(), e.target.value);
            // console.log(date)
            setCurrent(date);
            // console.log(current)
          }}
        ></select>
      </h1>
      <div>
        <ul className="flex list-none w-56 justify-around">
          <li>日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li>六</li>
        </ul>
        <ul
          className="flex list-none w-56 justify-start flex-wrap"
          id="days"
        ></ul>
      </div>
    </div>
  );
}

export default App;
