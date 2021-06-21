let a =3
console.log(this.a)
console.log(global.a)

this.c=567

console.log(a)
console.log(global.c)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports ===this )
///criando uma variavel sem var e let,s
abc=3//nao fazer isso
console.log(global.abc)
////let ,const ficam na memoria local,apenas var é armazenado nos arquivos globais