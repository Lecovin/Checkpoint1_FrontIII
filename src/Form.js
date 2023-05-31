import React, { useState } from "react";

function Form() {
  const [inputData, setInputData] = useState({ input1: "", input2: "" });
  const [formEntries, setFormEntries] = useState([]);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos
    if (
      inputData.input1.trim().length < 3 ||
      !inputData.input2.match(/\d/) ||
      inputData.input2.length < 6
    ) {
      alert("Por favor, verifique os dados inseridos no formulário");
      return;
    }

    // Adicionando entrada ao array
    setFormEntries([...formEntries, inputData]);

    // Limpa o formulário
    setInputData({ input1: "", input2: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="input1"
          value={inputData.input1}
          onChange={handleChange}
          placeholder="Insira algum texto..."
        />
        <input
          type="text"
          name="input2"
          value={inputData.input2}
          onChange={handleChange}
          placeholder="Insira algum texto com um número..."
        />
        <button type="submit">Enviar</button>
      </form>
      <ul>
        {formEntries.map((entry, index) => (
          <li key={index}>
            {entry.input1} - {entry.input2}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
