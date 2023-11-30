import { useState } from "react";
import Input from "./components/In";
import Output from "./components/Out";
import im from "./assets/icon-arrow.svg";

import "./App.css";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorsd, setErrorsd] = useState(false);
  const [errorsy, setErrorsy] = useState(false);
  const [errorsm, setErrorsm] = useState(false);
  const [errorsDate, setErrorsDate] = useState(false);
  const today = new Date();
  const [age, setAge] = useState({
    year: "--",
    month: "--",
    day: "--",
  });

  const checkLeapyear = (year) => {
    if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
      return true;
    } else {
      return false;
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (day.length == 0 || month.length == 0 || year.length == 0) {
      setErrors(true);
      return
    }

    if (month > 12) {
      setErrorsm(true);
      return
    } else {
      setErrorsd(false);
      
    }
    if (day > 31) {
      setErrorsd(true);
      return
    } else {
      setErrorsd(false);
    }
    if (year > 2023 || (year.length > 0 && year.length < 4)) {
      setErrorsy(true);
      return
    } else {
      setErrorsy(false);
    }
    const mo = [1, 3, 5, 7, 8, 10, 12];
    if (day > 30 && !mo.includes(month)) {
      setErrorsDate(true);
      return
    } else {
      setErrorsDate(false);
    }
    if (checkLeapyear(year) && month == 2 && day > 28) {
      setErrorsDate(true);
      return
    } else {
      setErrorsDate(false);
    }
    if (month == 2 && day > 28) {
      setErrorsDate(true);
      return
    } else {
      setErrorsDate(false);
    }
    if (!errors && !errorsd && !errorsm && !errorsy && !errorsDate) {
      const userBirthdate = new Date(`${month}/${day}/${year}`);
      const ageInMilliseconds = today - userBirthdate;

      // Calculate age in years, months, and days
      const ageDate = new Date(ageInMilliseconds);
      
      const ageYears = ageDate.getUTCFullYear() - 1970;
      const ageMonths = ageDate.getUTCMonth();
      const ageDays = ageDate.getUTCDate() - 1; // Subtract 1 to avoid off-by-one error

      setAge({
        year: ageYears,
        month: ageMonths,
        day: ageDays,
      });
    } else {
      return setAge({
        year: "--",
        month: "--",
        day: "--",
      });
    }
  };

  return (
    <>
      <div className="body">
        <div className="card">
          <form onSubmit={handlesubmit}>
            <div className="flex justify-evenly p-12">
              <div className="">
                <label
                  className={`${
                    errors === true || errorsd === true ? "text-red-600" : ""
                  } font-bold`}
                >
                  DAY
                </label>
                <br />
                <input
                  className="placeholder:text-center mt-2 w-3/4 rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset"
                  type="number"
                  placeholder="DD"
                  onChange={(e) => setDay(e.target.value)}
                ></input>
                {errors && day.length <= 0 ? (
                  <label className="block text-red-600">
                    This field is required
                  </label>
                ) : (
                  ""
                )}
                {errorsd ? (
                  <label className="block text-red-600">
                    Must be a valid day
                  </label>
                ) : (
                  ""
                )}
                {errorsDate ? (
                  <label className="block text-red-600">
                    Must be a valid date
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <label
                  className={`${
                    errors === true || errorsm === true ? "text-red-600" : ""
                  } font-bold`}
                >
                  MONTH
                </label>
                <br />
                <input
                  className="placeholder:text-center mt-2 w-3/4  rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset "
                  type="number"
                  placeholder="MM"
                  onChange={(e) => setMonth(e.target.value)}
                ></input>
                {errors && month.length <= 0 ? (
                  <label className="block text-red-600">
                    This field is required
                  </label>
                ) : (
                  ""
                )}
                {errorsm ? (
                  <label className="block text-red-600">
                    Must be a valid month
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <label
                  className={`${
                    errors === true || errorsy === true ? "text-red-600" : ""
                  } font-bold`}
                >
                  YEAR
                </label>
                <br />
                <input
                  className="placeholder:text-center mt-2 w-3/4 rounded-md border-0 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset "
                  type="number"
                  placeholder="YYYY"
                  onChange={(e) => setYear(e.target.value)}
                ></input>
                {errors && year.length <= 0 ? (
                  <label className="block text-red-600">
                    This field is required
                  </label>
                ) : (
                  ""
                )}
                {errorsy ? (
                  <label className="block text-red-600">
                    Must be a valid past
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex">
              <hr className="mt-10"></hr>

              <div className="colour1">
                <input type="image" src={im} className="h-20"></input>
              </div>
            </div>
          </form>
          <div>
            <div className="flex-cols p-11 justify-center">
              <div className="flex mt-3">
                <div className="lg:text-8xl text-6xl ">
                  <div className="colour">
                    {age.year}
                  </div>
                </div>
                <div className="lg:text-8xl text-7xl font-extrabold">years</div>
              </div>
              <div className="flex mt-3">
                <div className="lg:text-8xl text-6xl">
                  <div className="colour">
                    {month.length == 0 ? "--" : age.month}
                  </div>
                </div>
                <div className="lg:text-8xl text-6xl font-extrabold">
                  months
                </div>
              </div>
              <div className="flex mt-3">
                <div className="lg:text-8xl text-6xl">
                  <div className="colour">
                    {day.length == 0 ? "--" : age.day}
                  </div>
                </div>
                <div className="lg:text-8xl text-7xl font-extrabold">days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
