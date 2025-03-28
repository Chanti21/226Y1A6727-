import { useState } from "react";
import axios from "axios";

export default function AverageCalculator() {
  const [inputValues, setInputValues] = useState("");
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchAverage = async () => {
    setErrorMsg(null);
    try {
      const response = await axios.post("/api/calculate-average", {
        numbers: inputValues.split(",").map(val => parseFloat(val.trim()))
      });
      setResult(response.data.average);
    } catch (error) {
      setErrorMsg("Error computing average. Ensure correct input format.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold mb-4">Average Calculator</h1>
      <input
        type="text"
        className="border p-2 rounded w-80 mb-2"
        placeholder="Enter comma-separated numbers"
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={fetchAverage}
      >
        Compute
      </button>
      {result !== null && <p className="mt-4 text-lg">Computed Average: {result}</p>}
      {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
    </div>
  );
}
