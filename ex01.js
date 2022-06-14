// Faça um programa que receba a idade de uma pessoa em anos e 
// imprima essa idade em: Meses, Dias, Horas, Minutos.Dias

// entrada
let idade = 1;

// processamento
let idadeMeses = idade * 12;
let idadeDias = idade * 365;
let idadeHoras = idadeDias * 24;
let idadeMinutos = idadeHoras * 60;

// saída
console.log("Sua idade em meses é " + idadeMeses);
console.log("Sua idade em Dias é " + idadeDias);
console.log("Sua idade em Horas é " + idadeHoras);
console.log("Sua idade em Minutos é " + idadeMinutos);