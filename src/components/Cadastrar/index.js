import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function CadastrarFun() {
    const [primeiroNome, setPrimeiroNome] = useState("");
    const [ultimoNome, setUltimoNome] = useState("");
    const [salario, setSalario] = useState("");
    const [cargo, setCargo] = useState("");
    const [setor, setSetor] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numeroCasa, setNumeroCasa] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");

    const navigate = useNavigate();

    function cadastrarFuncionarios() {
        const funcionarios = {
            primeiroNome: primeiroNome,
            ultimoNome: ultimoNome,
            salario: salario,
            cargo: cargo,
            setor: setor,
            logradouro: logradouro,
            numeroCasa: numeroCasa,
            cep: cep,
            cidade: cidade,
            estado: estado,
            pais: pais
        }
        axios.post("http://164.92.148.240:8090/api/funcionarios/", funcionarios).then(() => {
            navigate("/")
        })
    }


    return (
        <div>
            <h1>Formulário </h1>
            <input type="text" onChange={(e) => setPrimeiroNome(e.target.value)} placeholder="Primeiro Nome: " />
            <p></p>
            <input type="text" onChange={(e) => setUltimoNome(e.target.value)} placeholder="Ultimo nome: " />
            <p></p>
            <input type="text" onChange={(e) => setSalario(e.target.value)} placeholder="Salario: " />
            <p></p>
            <input type="text" onChange={(e) => setCargo(e.target.value)} placeholder="Cargo: " />
            <p></p>
            <input type="text" onChange={(e) => setSetor(e.target.value)} placeholder="Setor: " />
            <p></p>
            <input type="text" onChange={(e) => setLogradouro(e.target.value)} placeholder="Logradouro: " />
            <p></p>
            <input type="number" onChange={(e) => setNumeroCasa(e.target.value)} placeholder="Numero da residencia: " />
            <p></p>
            <input type="number" onChange={(e) => setCep(e.target.value)} placeholder="CEP: " />
            <p></p>
            <input type="text" onChange={(e) => setCidade(e.target.value)} placeholder="Cidade: " />
            <p></p>
            <input type="text" onChange={(e) => setEstado(e.target.value)} placeholder="Estado: " />
            <p></p>
            <input type="text" onChange={(e) => setPais(e.target.value)} placeholder="Pais: " />

            <button type="button" onClick={() => cadastrarFuncionarios()}>Cadastrar</button>
        </div>
    )
}

export default CadastrarFun;