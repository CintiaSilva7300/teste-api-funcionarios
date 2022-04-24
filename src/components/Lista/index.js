import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";



function ListarFuncionariosCadastrados() {
    const [funcionarios, setFuncionarios] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://164.92.148.240:8090/api/funcionarios/").then(((response) => {
            setFuncionarios(response.data)
        }));
    }, [])

    return (
        <div>
            <button type="button" onClick={() => navigate("/Cadastrar")}>cadastrar</button>
            <h1> Lista de Candidatos </h1>

            <table styles="table" border="2">
                <td> Nome: </td>
                <td> Sobre Nome: </td>
                <td> Salario: </td>
                <td> Cargo: </td>
                <td> Setor: </td>
                <td> Logradouro: </td>
                <td> Numero da Casa: </td>
                <td> CEP: </td>
                <td> Cidade: </td>
                <td> Estado: </td>
                <td> Pais: </td>

                {funcionarios.map((funcionario) => {
                    return (
                        <tr>
                            <td>{funcionario.primeiroNome}</td>
                            <td>{funcionario.ultimoNome}</td>
                            <td>{funcionario.salario}</td>
                            <td>{funcionario.cargo}</td>
                            <td>{funcionario.setor}</td>
                            <td>{funcionario.logradouro}</td>
                            <td>{funcionario.numeroCasa}</td>
                            <td>{funcionario.cep}</td>
                            <td>{funcionario.cidade}</td>
                            <td>{funcionario.estado}</td>
                            <td>{funcionario.pais}</td>


                            {/* <button type="button" onClick={() => ListarFuncionariosCadastrados()}>Cadastrar</button> */}
                        </tr>

                    );
                })}

            </table>
        </div>
    )
}
export default ListarFuncionariosCadastrados;

