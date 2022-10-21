import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [new Curso("Prácticas esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingeniería de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("Principio de diseño y arquitectura", 30, 75, true, 2020)];
export var ap = new Aprendiz("Juan pablo", "Reyes Gómez", "avatar.png", 30, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
/* console.log(ap); */
/*El ! me indica que el valor puede ser null*/
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel Educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos certificados</b></td><td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trElement);
}
