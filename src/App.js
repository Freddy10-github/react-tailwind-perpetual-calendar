import { useEffect, useState } from "react";

function App() {
  const [current, setCurrent] = useState(new Date());

  const dayStyleJudgement = (current, date) => {
    if (current.getMonth() !== date.getMonth())
      return `<li class="w-8 center text-center opacity-50">${date.getDate()}</li>`;
    else if (
      new Date().getDate() === date.getDate() &&
      new Date().getMonth() === date.getMonth()
    )
      return `<li class="w-8 center text-center border">${date.getDate()}</li>`;
    else return `<li class="w-8 center text-center">${date.getDate()}</li>`;
  };

  useEffect(() => {
    const daysContainer = document.querySelector("#days");
    const date = new Date(current.getFullYear(), current.getMonth(), 1);

    let str = "";
    //Render the last days of the previous month.
    date.setDate(date.getDate() - date.getDay());
    while (date.getMonth() !== current.getMonth()) {
      str += dayStyleJudgement(current, date);
      date.setDate(date.getDate() + 1);
    }
    //Render this month
    while (current.getMonth() === date.getMonth()) {
      str += dayStyleJudgement(current, date);
      date.setDate(date.getDate() + 1);
    }
    //Render the first few days of next month
    while (date.getDay() !== 0) {
      str += dayStyleJudgement(current, date);
      date.setDate(date.getDate() + 1);
    }
    daysContainer.innerHTML = str;
  }, [current]);

  // append years and months option.
  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <h1 className="text-red-700">
        <select
          name="years"
          id="years"
          onChange={(e) => {
            const date = new Date(e.target.value, current.getMonth());
            setCurrent(date);
          }}
        ></select>{" "}
        /
        <select
          name="months"
          id="months"
          onChange={(e) => {
            const date = new Date(current.getFullYear(), e.target.value);
            setCurrent(date);
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
